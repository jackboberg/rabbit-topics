const Channel = require('@modulus/rabbit-channel');

module.exports = function Publisher(url, opts) {
  return function (ex, topic, worker) {
    Channel(url, opts, function (err, ch, conn) {
      if (err) throw err;

      ch.assertExchange(ex, 'topic', function (err) {
        if (err) throw err;

        ch.assertQueue('', { exclusive: true }, function (err, ok) {
          if (err) throw err;

          function consumer(msg) {
            // TODO convert msg
            worker(msg, function (err) {
              if (err) throw err;

              // TODO ack, reply, etc
            });
          }

          // TODO support passing options
          ch.bindQueue(ok.queue, ex, topic);
          ch.consume(ok.queue, consumer, { noAck: true });
        });
      });
    });
  };
};
