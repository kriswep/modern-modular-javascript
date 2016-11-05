'use strict';

var _murderRobotDog = require('../shared/murderRobotDog');

var _murderRobotDog2 = _interopRequireDefault(_murderRobotDog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guerilla = (0, _murderRobotDog2.default)('guerilla');

// eslint-disable-next-line no-console
console.log(guerilla.bark());
// eslint-disable-next-line no-console
console.log(guerilla.kill());
guerilla.drive();
// eslint-disable-next-line no-console
console.log(guerilla.kill());

// eslint-disable-next-line 
//window.guerilla = guerilla; // expose it to play around