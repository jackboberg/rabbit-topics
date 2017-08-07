const Channel = require('@jackrabbit/channel')

module.exports = (url, opts) => (ex, topic, msg, done) => {
  Channel(url, opts, (err, ch, conn) => {
    if (err) return done(err)

    ch.assertExchange(ex, 'topic', {}, (err) => {
      if (err) return done(err)

      // TODO support setting options
      const publishOpts = { persistent: true }
      ch.publish(ex, topic, Buffer.from(JSON.stringify(msg)), publishOpts)

      // TODO use stream.Writeable to trigger callback
      done()
    })
  })
}
