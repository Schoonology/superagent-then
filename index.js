var when = require('when');

function plugin(request) {
  request.then = function then(onFulfilled, onRejected) {
    return when.promise(function (resolve, reject) {
      request
        .on('error', reject)
        .end(resolve);
    });
  };
}

module.exports = plugin;
