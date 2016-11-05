/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _murderRobotDog = __webpack_require__(1);
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _barker = __webpack_require__(2);
	
	var _barker2 = _interopRequireDefault(_barker);
	
	var _driver = __webpack_require__(3);
	
	var _driver2 = _interopRequireDefault(_driver);
	
	var _killer = __webpack_require__(4);
	
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var barker = function barker(state) {
	  return {
	    bark: function bark() {
	      return "Woof, I am " + state.name + "!";
	    }
	  };
	};
	
	exports.default = barker;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var driver = function driver(state) {
	  return {
	    // eslint-disable-next-line 
	    drive: function drive() {
	      return state.position += state.speed;
	    }
	  };
	};
	
	exports.default = driver;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var killer = function killer(state) {
	  return {
	    // eslint-disable-next-line no-console
	    kill: function kill() {
	      return state.name + " is killing now! Better keep away from position " + state.position + "!";
	    }
	  };
	};
	
	exports.default = killer;

/***/ }
/******/ ]);
//# sourceMappingURL=client-bundle.js.map