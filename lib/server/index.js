'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

// start server
_server2.default.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('server started on port ' + port + '!');
});