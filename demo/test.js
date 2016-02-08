var Promise = require('bluebird');
var yslow = Promise.promisifyAll(require('../index'));

yslow
  .output('http://fellipe.com')
  .then(function(result) {
    console.log(result);
  });
