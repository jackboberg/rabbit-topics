const Channel = require('@jackrabbit/channel')

module.exports = (url, opts) => (ex, topic, worker) => {
  Channel(url, opts, (err, ch, conn) => {
    if (err) throw err

    ch.assertExchange(ex, 'topic', {}, (err) => {
      if (err) throw err

      ch.assertQueue('', { exclusive: true }, (err, { queue }) => {
        if (err) throw err

        const consumer = ({ content }) => {
          // TODO try/catch
          const data = JSON.parse(content.toString())

          worker(data, (err) => {
            if (err) throw err

            // TODO ack, reply, etc
          })
        }

        // TODO support passing options
        ch.bindQueue(queue, ex, topic)
        ch.consume(queue, consumer, { noAck: true })
      })
    })
  })
}
