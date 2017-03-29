import React from 'react'
import ReactDOM from 'react-dom'
import { BarChart } from 'react-d3'
import Loading from '../loading'
import getData from '../../lib/get-data'
import config from '../../config'

export default class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      loading: true,
      innerHeight: 300,
      innerWidth: 1200,
      stats: [
        {
          values: []
        }
      ]
    }
    this.readMore = this.readMore.bind(this)
    this.fitToParentSize = this.fitToParentSize.bind(this)
  }
  async componentDidMount () {
    this.fitToParentSize()
    window.addEventListener('resize', this.fitToParentSize)
    const data = await getData(`${config.generatorUrl}?id=${this.props.urlId}`)
    const stats = [
      {
        values: Object.assign(data.map(s => ({ x: `${s.title} (${s.score})`, y: s.score })))
      }
    ]
    this.setState({ results: data, stats: stats, loading: false })
  }
  fitToParentSize () {
    const elem = ReactDOM.findDOMNode(this)
    const w = elem.parentNode.offsetWidth - 20
    this.setState({ innerWidth: w })
  }
  readMore (e) {
    const name = e.currentTarget.getAttribute('name')
    if (!this.state[name] || this.state[name] === 'none') {
      this.setState({ [name]: 'block' })
    } else {
      this.setState({ [name]: 'none' })
    }
  }
  render () {
    return (
      <div>
        <Loading loading={this.state.loading} />
        <div style={{display: this.state.loading ? 'none' : 'block'}}>
          <p className='question'>Test results</p>
          <p className='title2'>Domains</p>
          <div>
            <BarChart
              data={this.state.stats}
              width={this.state.innerWidth}
              height={this.state.innerHeigth}
              hoverAnimation={false}
        />
          </div>

          {
            this.state.results.map(d =>
              <div key={d.title} id={'domain-' + d.domain}>
                <p className='question'>{d.title}</p>
                <p>
                  <span dangerouslySetInnerHTML={{__html: d.shortDescription}} />
                  <br />
                  <br />
                  <div style={{display: this.state[d.domain] || 'none'}}><span dangerouslySetInnerHTML={{__html: d.description}} /></div>
                  <span name={d.domain} onClick={this.readMore} style={{textTransform: 'lowercase', color: '#5991ff'}}>
                    {this.state[d.domain] === 'block' ? '...read less' : `... read more (${d.description.split(' ').length} words)`}
                  </span>
                </p>
                <p><span dangerouslySetInnerHTML={{__html: d.text}} /> </p>
                <p>Your level of <i>{d.title.toLowerCase()}</i> is <b>{d.scoreText} ({d.score}/{d.count * 5})</b></p>
                <div style={{ display: d.facets.length > 1 ? 'block' : 'none' }} >
                  <BarChart
                    data={[{values: Object.assign(d.facets.map(s => ({x: `${s.title} (${s.score})`, y: s.score})))}]}
                    width={this.state.innerWidth}
                    hoverAnimation={false}
                    height={this.state.innerHeight}
                />
                </div>
                {
                  d.facets.map(f =>
                    <span key={f.title}>
                      <p className='title2'>{f.title}</p>
                      <p><span dangerouslySetInnerHTML={{__html: f.text}} /></p>
                      <p>Your level of <i>{f.title.toLowerCase()}</i> is <b>{f.scoreText} ({f.score}/{f.count * 6})</b></p>
                    </span>
                  )
                }
              </div>
            )
          }
          <style>
            {`
              .title2 {
                font-size: 23px;
                margin-bottom: 10px;
              }
              .rd3-barchart-bar:nth-child(1) {
                fill: #ff8888;
              }
              .rd3-barchart-bar:nth-child(2) {
                fill: #88d6ff;
              }
              .rd3-barchart-bar:nth-child(3) {
                fill: #fff188;
              }
              .rd3-barchart-bar:nth-child(4) {
                fill: #98ff88;
              }
              .rd3-barchart-bar:nth-child(5) {
                fill: #ee88ff;
                box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
              }
              .rd3-barchart-bar:nth-child(6) {
                fill: #a988ff;
              }
              @media (min-width:681px) and (max-width:1300px) {
                .rd3-barchart-xaxis text {
                  text-anchor: start;
                  transform: rotate(50deg);
                  alignment-baseline: hanging;
                }
                .rd3-chart {
                  padding-bottom: 190px;
                }
                .rd3-barchart-xaxis line {
                  transform: scaleY(4);
                }
              }
              @media (max-width: 680px) {
                .rd3-barchart-xaxis text {
                  writing-mode: tb;
                  text-anchor: start;
                }
                .rd3-barchart-xaxis line {
                  transform: scaleY(0);
                }
                .rd3-chart {
                  padding-bottom: 200px;
                }
              }
            `}
          </style>
        </div>
      </div>
    )
  }
}
