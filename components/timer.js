import React from 'react'

export default class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      elapsed: 0
    }
    this.tick = this.tick.bind(this)
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, 500)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    this.setState({elapsed: new Date() - this.props.start})
  }
  render () {
    let seconds = Math.round(this.state.elapsed / 1000)
    return <div className='timer'>Started <b>{seconds} seconds</b> ago</div>
  }
}
