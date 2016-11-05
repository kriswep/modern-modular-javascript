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