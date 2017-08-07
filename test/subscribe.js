const { test } = require('tap')
const isFunction = require('lodash.isfunction')

const Subscribe = require('../lib/subscribe')

test('needs tests', { skip: true }, ({ assert, end }) => {
  assert(isFunction(Subscribe))
  end()
})
