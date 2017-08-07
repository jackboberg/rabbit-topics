const { test } = require('tap')
const isFunction = require('lodash.isfunction')

const Publish = require('../lib/publish')

test('needs tests', { skip: true }, ({ assert, end }) => {
  assert(isFunction(Publish))
  end()
})
