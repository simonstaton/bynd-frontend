'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM = function () {
    function DOM() {
        _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
        key: 'canUse',
        get: function get() {
            return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
        }
    }, {
        key: 'body',
        get: function get() {
            if (!DOM.$body) DOM.$body = document.getElementsByTagName('BODY')[0];
            return DOM.$body;
        }
    }]);

    return DOM;
}();

exports.default = DOM;