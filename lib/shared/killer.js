"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var killer = function killer(state) {
  return {
    kill: function kill() {
      return state.name + " is killing now! Better keep away from position " + state.position + "!";
    }
  };
};

var unusedThing = exports.unusedThing = function unusedThing(params) {
  // eslint-disable-next-line no-console
  console.log("unused extra thingy: " + params);
};

exports.default = killer;