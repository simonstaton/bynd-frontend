"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;
// window.addEventListener('resize', throttle(() => {
//   console.log('resize');
// }, 500));

function throttle(func) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, ms);
    }
  };
}