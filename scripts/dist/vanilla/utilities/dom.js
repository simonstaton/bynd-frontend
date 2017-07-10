"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM = (_temp = _class = function DOM() {
  _classCallCheck(this, DOM);
}, _class.canUse = !!(typeof window !== 'undefined' && window.document && window.document.createElement), _class.body = document.getElementsByTagName("BODY")[0], _temp);
exports.default = DOM;