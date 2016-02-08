var Promise = require('bluebird');
var YSlow = Promise.promisifyAll(require('yslowjs'));
var reference = require('./reference');

exports.getReference = function() {
  return reference;
};

exports.output = function(url) {
  return new Promise(
    function (resolve, reject) {
      resolve()
    })
    .then(function() {
      var yslow = new YSlow(url, ['--info', 'all']);
      var results = yslow.runSync();

      var sensors = {
        weight: results.w,
        score: results.o,
        loadTime: results.lt
      };

      return {
        'url': url,
        'plugin': reference.plugin,
        'sensors': sensors
      };
    });
};
