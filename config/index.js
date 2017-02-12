'use strict'

module.exports = {
  dataUrl: process.env.DATA_URL || 'https://micro-bigfive-questions-olegrjzdba.now.sh/getQuestions',
  defaultLanguage: process.env.DEFAULT_LANG || 'en',
  defaultTest: process.env.DEFAULT_TEST || '50'
}

