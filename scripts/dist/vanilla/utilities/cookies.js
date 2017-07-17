'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
    function Cookies() {
        _classCallCheck(this, Cookies);
    }

    _createClass(Cookies, null, [{
        key: 'set',
        value: function set(name) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var data = value;
            switch (typeof data === 'undefined' ? 'undefined' : _typeof(data)) {
                case 'object':
                    data = escape(JSON.stringify(data));
                    break;
                case 'string':
                    data = escape(data);
                    break;
                default:
                    data = data.toString();
            }
            document.cookie = name + '=' + data;
        }
    }, {
        key: 'delete',
        value: function _delete(name) {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }, {
        key: 'get',
        value: function get(name) {
            var key = void 0;
            var value = void 0;
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i += 1) {
                key = cookies[i].substr(0, cookies[i].indexOf('=')).replace(/^\s+|\s+$/gm, '');
                value = cookies[i].substr(cookies[i].indexOf('=') + 1);
                if (key === name) {
                    return unescape(value);
                }
            }
            return null;
        }
    }]);

    return Cookies;
}();

exports.default = Cookies;