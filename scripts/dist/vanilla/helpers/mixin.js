"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * mixin helper for superclass mixins
 *
 * @example
 * class MyComp extends mixin(React.Component).with(HasTouch, HasDrag) {}
 */
var MixinBuilder = function () {
    function MixinBuilder(base) {
        _classCallCheck(this, MixinBuilder);

        this.base = base;
    }

    _createClass(MixinBuilder, [{
        key: "with",
        value: function _with() {
            for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
                mixins[_key] = arguments[_key];
            }

            return mixins.reduce(function (theClass, mixin) {
                return mixin(theClass);
            }, this.base);
        }
    }]);

    return MixinBuilder;
}();

var mixin = function mixin(base) {
    return new MixinBuilder(base);
};

exports.default = mixin;