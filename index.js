module.exports = function (url, opts) {
  return {
    publish: function (topic, msg, done) {
      done();
    },
    subscribe: function (topic, worker) {
      // listen and queue to worker
    }
  };
};
