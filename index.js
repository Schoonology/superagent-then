var superagent = require('superagent');
var when = require('when');

function plugin(request) {
  request.end = function end() {
    return when.promise(function (resolve, reject) {
      request.on('error', reject);
      superagent.Request.prototype.end.call(request, resolve);
    });
  };
}

module.exports = plugin;
