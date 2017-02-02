'use strict'

module.exports = (radios, from, to) => {
  const currentQuestions = radios.slice(from, to)
  return Object.keys(currentQuestions).length === 5
}
