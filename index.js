const Publish = require('./lib/publish');

module.exports = function (url, opts) {
  return {
    publish: Publish(url, opts),
    subscribe: function (topic, worker) {
      // listen and queue to worker
    }
  };
};
