'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HasTouch mixin for use with React Components, will setup touch handlers
 * for touchStart, touchMove, touchCancel, touchEnd.
 *
 * This component will setup touch event handlers on mount, it's
 * required to setup an element with a reference of hasTouch. Example:
 * <div ref="hasTouch" className="my-handler" />
 *
 * @class HasTouch
 * @namespace scripts.react.HasTouch
 * @author Simon Staton [simon.staton@bynd.com]
 *
 * @example
 * import { mixin } from 'bynd-frontend/scripts';
 * import { HasTouch } from 'bynd-frontend/scripts/react';
 *
 * class MyComp extends mixin(React.Component).with(HasTouch) {
 *
 *     touchStart(e) {
 *         // console.log(e);
 *     }
 *
 *     componentDidMount() {
 *         super.componentDidMount(); // If overriding ensure this get's fired
 *     }
 *
 *      render() {
 *          return <div ref="hasTouch" />
 *      }
 *
 * }
 */
exports.default = function (base) {
  return function (_base) {
    _inherits(HasTouch, _base);

    function HasTouch() {
      _classCallCheck(this, HasTouch);

      return _possibleConstructorReturn(this, (HasTouch.__proto__ || Object.getPrototypeOf(HasTouch)).apply(this, arguments));
    }

    _createClass(HasTouch, [{
      key: 'componentDidMount',


      /**
       * Life cycle event - used for binding touchEvents to hasTouch ref
       * @method componentDidMount
       * @return {undefined}
       */
      value: function componentDidMount() {
        if (this.touchStart) this.refs.hasTouch.addEventListener('touchstart', this.touchStart.bind(this));
        if (this.touchMove) this.refs.hasTouch.addEventListener('touchmove', this.touchMove.bind(this));
        if (this.touchCancel) this.refs.hasTouch.addEventListener('touchcancel', this.touchCancel.bind(this));
        if (this.touchEnd) this.refs.hasTouch.addEventListener('touchend', this.touchEnd.bind(this));
      }
    }]);

    return HasTouch;
  }(base);
};