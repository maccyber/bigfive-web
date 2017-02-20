'use strict'

import React from 'react'
import Results from '../components/results/index.js'
import Page from '../layouts'

export default class theResults extends React.Component {
  render () {
    return (
      <Page pageTitle='BigFive Personality Test - Results'>
        <Results results={this.props.data} urlId={this.props.url.query.id} />
      </Page>
    )
  }
}
