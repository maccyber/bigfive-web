'use strict'

import React from 'react'
import TheTest from '../components/thetest'
import Page from '../layouts'

export default class Index extends React.Component {
  render () {
    return (
      <Page pageTitle='Personality test'>
        <TheTest />
      </Page>
    )
  }
}
