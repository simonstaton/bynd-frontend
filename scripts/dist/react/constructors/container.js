'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Container base class for use with React controller wrappers. Will render
 * it's children directly
 *
 * @class Container
 * @extends React.Component
 * @namespace scripts.react.Container
 * @author Simon Staton [simon.staton@bynd.com]
 *
 * @example
 * import { Container } from 'bynd-frontend/scripts/react';
 *
 * class MyComp extends Container {
 *
 * }
 */
var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container(props) {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }]);

    return Container;
}(_react2.default.Component);

/**
 * Type Rules
 * @name propTypes
 * @memberof Container
 * @type {Object}
 * @static
 */


Container.propTypes = {
    children: _propTypes2.default.element.isRequired
};

/**
 * Default Props
 * @name defaultProps
 * @memberof Container
 * @type {Object}
 * @static
 */
Container.defaultProps = {
    children: null
};

exports.default = Container;