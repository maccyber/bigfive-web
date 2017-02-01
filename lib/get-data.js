'use strict'

import fetch from 'isomorphic-fetch'

module.exports = async (url) => {
  const dataResponse = await fetch(url)
  const data = await dataResponse.json()
  return data
}
