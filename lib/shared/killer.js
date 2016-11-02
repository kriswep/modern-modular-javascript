"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var killer = function killer(state) {
  return {
    // eslint-disable-next-line no-console
    kill: function kill() {
      return console.log(state.name + " is killing now! Better keep away from position " + state.position);
    }
  };
};

exports.default = killer;