"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM = function DOM() {
  _classCallCheck(this, DOM);
};

DOM.canUse = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
DOM.body = document.getElementsByTagName("BODY")[0];
exports.default = DOM;