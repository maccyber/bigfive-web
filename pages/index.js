'use strict'

import React from 'react'
import TheTest from '../components/thetest'
import Page from '../layouts'

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const isIE11 = !!userAgent.match(/Trident\/7\./)

    return {
      userAgent: userAgent,
      isIE11: isIE11,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }
  }
  render () {
    return (
      <Page pageTitle='BigFive Personality Test' isIE11={this.props.isIE11}>
        <TheTest userAgent={this.props.userAgent} ip={this.props.ip} />
      </Page>
    )
  }
}
