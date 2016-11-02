'use strict';

var _murderRobotDog = require('../shared/murderRobotDog');

var _murderRobotDog2 = _interopRequireDefault(_murderRobotDog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guerilla = (0, _murderRobotDog2.default)('guerilla');

guerilla.bark();
guerilla.kill();
guerilla.drive();
guerilla.kill();

// eslint-disable-next-line 
window.guerilla = guerilla;