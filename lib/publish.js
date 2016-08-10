const Channel = require('@modulus/rabbit-channel');

module.exports = function Publish(url, opts) {
  return function (ex, topic, msg, done) {
    Channel(url, opts, function (err, ch, conn) {
      if (err) return done(err);

      ch.assertExchange(ex, 'topic', {}, function (err) {
        // TODO support setting options
        var publishOpts = { persistent: true };

        if (err) return done(err);

        ch.publish(ex, topic, new Buffer(JSON.stringify(msg)), publishOpts);

        // TODO use stream.Writeable to trigger callback
        done();
      });
    });
  };
};
