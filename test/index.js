const { replace, when } = require('testdouble')
const { test } = require('tap')

const Publish = replace('../lib/publish')
const Subscribe = replace('../lib/subscribe')

const Topics = require('..')

const url = 'amqp://guest:guest@localhost'
const opts = {}

test('returns a publisher', ({ end, equals }) => {
  when(Publish(url, opts)).thenReturn('publisher')
  const { publish } = Topics(url, opts)

  equals(publish, 'publisher')
  end()
})

test('returns a subscriber', ({ end, equals }) => {
  when(Subscribe(url, opts)).thenReturn('subscriber')
  const { subscribe } = Topics(url, opts)

  equals(subscribe, 'subscriber')
  end()
})
