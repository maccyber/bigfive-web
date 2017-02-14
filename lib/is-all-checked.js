'use strict'

import config from '../config'

module.exports = (radios, from, to) => {
  const currentQuestions = radios.slice(from, to)
  return Object.keys(currentQuestions).length === config.defaultLimit
}
