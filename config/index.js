'use strict'

module.exports = {
  dataUrl: process.env.DATA_URL || 'https://questions.bigfive.maccyber.io/getQuestions',
  generatorUrl: process.env.GENERATOR_URL || 'https://generator.bigfive.maccyber.io',
  defaultLanguage: process.env.DEFAULT_LANG || 'en',
  defaultLimit: parseInt(process.env.DEFAULT_LIMIT) || 5,
  defaultTest: process.env.DEFAULT_TEST || 120
}

