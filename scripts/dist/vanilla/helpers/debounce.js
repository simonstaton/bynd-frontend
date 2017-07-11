"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
// window.addEventListener('resize', debounce(() => {
//   console.log('resize');
// }, 500));

function debounce(fn, wait) {
  var timeout = void 0;
  return function () {
    var _this = this,
        _arguments = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(_this, _arguments);
    }, wait || 1);
  };
}