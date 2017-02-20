import React from 'react'
import Router from 'next/router'
import config from '../config'
import getData from '../lib/get-data'
import postData from '../lib/post-data'
import isAllChecked from '../lib/is-all-checked'
import Progressbar from './progressbar'
import Questions from './questions'
import Languagebar from './languagebar'
import Loading from './loading'
import Navbuttons from './navbuttons'
import TimerExample from './timer'
import PersonInfo from './info'

export default class TheTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      choises: [],
      questions: [],
      languages: [],
      radios: [],
      lang: config.defaultLanguage,
      choosenTest: props.test || config.defaultTest,
      submitDisabled: true,
      now: Date.now(),
      age: '',
      gender: 'Male',
      country: '',
      buttonSubmitDisabled: true,
      hideMain: true
    }
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.buttonSubmit = this.buttonSubmit.bind(this)
  }

  async componentDidMount () {
    const data = await getData(`${config.dataUrl}?lang=${this.state.lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
    this.setState({ ...data, loading: false })
  }

  async handleChange (e) {
    const name = e.target.name || e.target.getAttribute('name')
    const value = e.target.value || e.target.getAttribute('value')
    await this.setState({ [name]: value })
    if (this.state.country && this.state.age) {
      this.setState({ buttonSubmitDisabled: false })
    }
  }

  buttonSubmit (e) {
    e.preventDefault()
    this.setState({ hideMain: false })
  }

  handleRadioChange (e) {
    let radioStore = this.state.radios
    const selectedName = parseInt(e.currentTarget.getAttribute('name'))
    const selectedValue = parseInt(e.currentTarget.getAttribute('value'))
    const {domain, facet} = this.state.questions.find(c => c.id === selectedName)
    radioStore[selectedName] = {score: selectedValue, domain: domain, facet: facet}
    this.setState({radios: radioStore})
    const allChecked = isAllChecked(radioStore, this.state.from, this.state.to)
    this.setState({submitDisabled: !allChecked})
  }

  async switchLanguage (e) {
    const lang = e.target.getAttribute('name')
    const data = await getData(`${config.dataUrl}?page=${this.state.page}&lang=${lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
    this.setState({ ...data, lang: lang })
  }

  async prevPage (e) {
    if (this.state.previous) {
      const data = await getData(`${this.state.previous}&lang=${this.state.lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
      this.setState({ ...data, submitDisabled: false })
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    if (this.state.next) {
      const data = await getData(`${this.state.next}&lang=${this.state.lang}&testType=${this.state.choosenTest}&limit=${config.defaultLimit}`)
      this.setState({ ...data, submitDisabled: true })
      window.scrollTo(0, 0) // Scrolls to top of page
    } else {
      this.setState({ submitDisabled: true, loading: true, hideMain: true })
      window.scrollTo(0, 0)
      this.state.radios.shift()
      const answers = {
        timeElapsed: Math.round((Date.now() - this.state.now) / 1000),
        dateStamp: Date.now(),
        age: this.state.age,
        country: this.state.country,
        gender: this.state.gender,
        ip: this.props.ip,
        userAgent: this.props.userAgent,
        lang: this.state.lang,
        test: this.state.testInfo.test,
        totalQuestions: this.state.totalQuestions,
        answers: this.state.radios
      }
      // console.log(JSON.stringify(answers, null, 2))
      const postRes = await postData(config.generatorUrl, answers)
      // console.log(postRes.id)
      Router.push(`/results?id=${postRes.id}`)
    }
  }

  render () {
    return (
      <div>
        <Loading loading={this.state.loading} />
        <PersonInfo age={this.state.age} gender={this.state.gender} buttonSubmitDisabled={this.state.buttonSubmitDisabled} handleChange={this.handleChange} buttonSubmit={this.buttonSubmit} hideMain={this.state.hideMain} loading={this.state.loading} />
        <div id='main' style={{display: this.state.hideMain ? 'none' : 'block'}} >
          <form onSubmit={this.handleSubmit}>
            <div>
              <TimerExample start={this.state.now} />
              <Languagebar switchLanguage={this.switchLanguage} selectedLanguage={this.state.lang} languages={this.state.languages} />
            </div>
            <Progressbar progress={this.state.percentDone} />
            {
                this.state.questions.map(q =>
                  <Questions key={'Q' + q.id} {...q} radioSelected={this.state.radios} handleRadioChange={this.handleRadioChange} />
                )
              }
            <Navbuttons prevPage={this.prevPage} previous={this.state.previous} submitDisabled={this.state.submitDisabled} />
            <style>
              {`
                .choiseBox:hover {
                  cursor: pointer;
                }
                .checked-1 {
                  color: #e48585;
                }
                .checked-2 {
                  color: #e0b8b8;
                }
                .checked-3 {
                  color: #d3d898;
                }
                .checked-4 {
                  color: #bddebe;
                }
                .checked-5 {
                  color: #94d695;
                }
                .timer {
                  float: right;
                }
              `}
            </style>
          </form>
        </div>
      </div>
    )
  }
}
