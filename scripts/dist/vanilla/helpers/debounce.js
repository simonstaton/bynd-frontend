"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
// window.addEventListener('resize', debounce(() => {
//   console.log('resize');
// }, 500));

function debounce(fn, wait) {
  var _this = this;

  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(_this, args);
    }, wait || 1);
  };
}