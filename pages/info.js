'use strict'

import React from 'react'
import PersonInfo from '../components/person-info'
import Page from '../layouts'

export default class Info extends React.Component {
  static async getInitialProps ({ req }) {
    return {
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    }
  }
  render () {
    return (
      <Page pageTitle='BigFive Personality Test - Info'>
        <PersonInfo userAgent={this.props.userAgent} ip={this.props.ip} />
      </Page>
    )
  }
}
