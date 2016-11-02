'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _barker = require('./barker');

var _barker2 = _interopRequireDefault(_barker);

var _driver = require('./driver');

var _driver2 = _interopRequireDefault(_driver);

var _killer = require('./killer');

var _killer2 = _interopRequireDefault(_killer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var murderRobotDog = function murderRobotDog(name) {
  var state = {
    name: name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, (0, _barker2.default)(state), (0, _driver2.default)(state), (0, _killer2.default)(state));
};

exports.default = murderRobotDog;