'use strict'

import React from 'react'
import Questions from '../components/questions'
import Page from '../layouts'

export default class Index extends React.Component {
  render () {
    return (
      <Page pageTitle='Personality test'>
        <Questions />
      </Page>
    )
  }
}
