'use strict'

const test = require('ava')
const pkg = require('../../package.json')
const dependencies = pkg.dependencies || {}

Object.keys(dependencies).forEach((dependency) => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})
