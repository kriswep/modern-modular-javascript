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