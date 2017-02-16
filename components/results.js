import React from 'react'
import d3 from 'react-d3'
import { BarChart } from 'react-d3'
import Loading from './loading'
import getData from '../lib/get-data'
import config from '../config'

export default class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      loading: true,
      stats: [ 
        {
          values: []
        }
      ]
    }
  }
  async componentDidMount () {
    const data = await getData(`${config.generatorUrl}?id=${this.props.urlId}`)
    const stats = [
      {
        values: Object.assign(data.map(s => ({ x: `${s.title} (${s.score})`, y: s.score })))
      }
    ]
    this.setState({ results: data, stats: stats, loading: false })
  }
  render () {
    return (
      <div>
        <Loading loading={this.state.loading} />
        <p className='question'>Test results</p>
        <p className='title2'>Domains</p>
        <div>
        <BarChart
          data={this.state.stats}
          width={1200}
          height={200}
        />
        </div>

        {this.state.results.map(d => {
          return (
            <div key={d.title} id={'domain-' + d.domain}>
              <p className='question'>{d.title}</p>
              <p>
                {d.shortDescription}
                <br/>
                <a style={{textTransform: 'lowercase', color: '#5991ff'}}>... read more ({d.description.split(' ').length} words)</a>
                <div style={{display: 'none'}}>{d.description}</div>
              </p>
              <p>{d.text}</p>
              <p>Your level of <i>{d.title.toLowerCase()}</i> is <b>{d.scoreText}</b></p>
              <div style={{ display: d.facets.length > 1 ? 'block' : 'none' }} >
                <BarChart
                  data={[{ values: Object.assign(d.facets.map(s => ({ x: `${s.title} (${s.score})`, y: s.score })))}]}
                  width={1200}
                  height={200}
                />
              </div>
              {d.facets.map(f => {
                return (
                  <span key={f.title}>
                  <p className='title2'>{f.title}</p>
                  <p><span dangerouslySetInnerHTML={{__html: f.text.replace('\n', '<br/>')}} /></p>
                  <p>Your level of <i>{f.title.toLowerCase()}</i> is <b>{f.scoreText}</b></p>
                  </span>
                )
              })}
            </div>
          )
        })
        }
        <style>
          {`
          .infoText { padding-bottom: 8px; }
          .navButton {
           background-color: #94d696;
           border-radius: 5px;
           border: transparent;
           color: white;
           margin-right: 10px;
         }
         .question {
           font-size: 28px;
           margin-bottom: 10px;
         }
         .title2 {
            font-size: 23px;
            margin-bottom: 10px;
           }
           .choiseText {
             line-height: 24px;
             padding: 4px;
             vertical-align: top;
           }
        `}
        </style>
      </div>
    )
  }
}
