'use strict'

import React from 'react'
import Results from '../components/results'
import Page from '../layouts'

export default class theResults extends React.Component {
//  static async getInitialProps ({ req }) {
//    const data = await getData(`${config.generatorUrl}?id=${id}`)
//    return { data }
//  }
    render () {
    return (
      <Page pageTitle='BigFive Personality Test - Results'>
        <Results results={this.props.data} urlId={this.props.url.query.id} />
      </Page>
    )
  }
}
