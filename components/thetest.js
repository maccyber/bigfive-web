import React from 'react'
import config from '../config'
import getData from '../lib/get-data'
import isAllChecked from '../lib/is-all-checked'
import Progressbar from './progressbar'
import Questions from './questions'
import Languagebar from './languagebar'
import Navbuttons from './navbuttons'
import TimerExample from './timer'

export default class TheTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      choises: [],
      questions: [],
      languages: [],
      radios: [],
      lang: config.defaultLanguage,
      submitDisabled: true,
      now: Date.now()
    }
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  async componentDidMount () {
    const data = await getData(`${config.dataUrl}?lang=${this.state.lang}`)
    this.setState({ data: data, questions: data.questions, choises: data.choises, languages: data.languages })
  }

  handleRadioChange (e) {
    let arr = this.state.radios
    arr[e.currentTarget.getAttribute('name')] = e.currentTarget.getAttribute('value')
    this.setState({radios: arr})
    const allChecked = isAllChecked(arr, this.state.data.from, this.state.data.to)
    this.setState({submitDisabled: !allChecked})
  }

  async switchLanguage (e) {
    const lang = e.target.getAttribute('name')
    const data = await getData(`${config.dataUrl}?page=${this.state.data.page}&lang=${lang}`)
    this.setState({ data: data, questions: data.questions, lang: lang, choises: data.choises })
  }

  async prevPage (e) {
    if (this.state.data.previous) {
      const data = await getData(`${this.state.data.previous}&lang=${this.state.lang}`)
      this.setState({ data: data, questions: data.questions, submitDisabled: false })
    }
  }

  async handleSubmit (e) {
    e.preventDefault()
    if (this.state.data.next) {
      const data = await getData(`${this.state.data.next}&lang=${this.state.lang}`)
      this.setState({ data: data, questions: data.questions, submitDisabled: true })
      window.scrollTo(0, 0) // Scrolls to top of page
    } else {
      console.log('finished. do something')
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <TimerExample start={this.state.now} />
        <Languagebar switchLanguage={this.switchLanguage} selectedLanguage={this.state.lang} languages={this.state.languages} />
        <Progressbar progress={this.state.data.percentDone} />
        {this.state.questions.map(q => {
          return (
            <Questions key={q.id} id={q.id} text={q.text} choises={this.state.choises} radioSelected={this.state.radios} handleRadioChange={this.handleRadioChange} />
          )
        })}
        <Navbuttons prevPage={this.prevPage} previous={this.state.data.previous} submitDisabled={this.state.submitDisabled} />
        <style>{`
          .navButton {
            background-color: #94d696;
            border-radius: 5px;
            border: transparent;
            color: white;
            margin-right: 10px;
          }
          .navButtonBack {
            background-color: #d68e8e;
          }
          .navButton:disabled {
            background-color: #d2d2d2;
          }
          .question {
            font-size: 28px;
          }
          .choiseText {
            line-height: 24px;
            padding: 4px;
            vertical-align: top;
          }
          .choiseBox:hover {
            cursor: pointer;
          }
          .checked {
            color: #bbbbbb;
          }
          .timer {
            float: right;
          }
      `}</style>
      </form>
    )
  }
}
