import config from '../config'
import React from 'react'
import getData from '../lib/get-data'
import Progressbar from './progressbar'
import Quest from './quest'
import Languagebar from './languagebar'

export default class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      choises: [],
      questions: [],
      radios: [],
      lang: config.defaultLanguage
    }
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
  }

  async componentDidMount () {
    const data = await getData(`${config.dataUrl}?lang=${this.state.lang}`)
    this.setState({ data: data, questions: data.questions, choises: data.choises })
  }

  handleRadioChange (e) {
    let arr = this.state.radios
    arr[e.target.name] = e.target.value
    this.setState({radios: arr})
  }

  async switchLanguage (e) {
    const lang = e.target.getAttribute('name')
    const data = await getData(`${config.dataUrl}?page=${this.state.data.page}&lang=${lang}`)
    this.setState({ data: data, questions: data.questions, lang: lang, choises: data.choises })
  }

  async handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.radios)
    if (this.state.data.next) {
      const data = await getData(`${this.state.data.next}&lang=${this.state.lang}`)
      this.setState({ data: data, questions: data.questions })
    } else {
      console.log('finished. do something')
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Languagebar switchLanguage={this.switchLanguage} selectedLanguage={this.state.lang} />
        <Progressbar progress={this.state.data.percentDone} />
        {this.state.questions.map(q => {
          return (
            <Quest key={q.id} id={q.id} text={q.text} choises={this.state.choises} handleRadioChange={this.handleRadioChange} />
          )
        })}
        <p>
          <button className='nextButton' type='submit'><i className='material-icons material-icons' style={{ fontSize: '48px' }}>navigate_next</i></button>
        </p>
        <style>{`
        .nextButton {
          background-color: #94d696;
          border-radius: 5px;
          border: transparent;
          color: white;
        }
        .question {
          font-size: 28px;
        }
      `}</style>
      </form>
    )
  }
}
