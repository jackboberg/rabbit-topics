const Publish = require('./lib/publish')
const Subscribe = require('./lib/subscribe')

module.exports = (url, opts) => ({
  publish: Publish(url, opts),
  subscribe: Subscribe(url, opts)
})
