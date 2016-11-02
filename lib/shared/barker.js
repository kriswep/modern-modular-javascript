"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var barker = function barker(state) {
  return {
    // eslint-disable-next-line no-console
    bark: function bark() {
      return console.log("Woof, I am " + state.name);
    }
  };
};

exports.default = barker;