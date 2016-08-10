const Channel = require('@modulus/rabbit-channel');

module.exports = function Publisher(url, opts) {
  return function (ex, topic, msg, done) {
    Channel(url, opts, function (err, ch, conn) {
      if (err) return done(err);

      ch.assertExchange(ex, 'topic', function (err) {
        if (err) return done(err);

        // TODO support setting options
        ch.publish(ex, topic, new Buffer(msg), { persistent: true });

        // TODO use stream.Writeable to trigger callback
        done();
      });
    });
  };
};
