"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Radio = Radio;
exports.Select = Select;
exports.default = Input;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Radio() {
    var _this = this;

    var className = this.props.attributes.className;
    return _react2.default.createElement(
        "fieldset",
        { className: this.state.valid ? className : className + " invalid" },
        this.props.options.map(function (option) {
            return _react2.default.createElement(
                "label",
                { key: option.value, htmlFor: _this.props.attributes.id },
                _react2.default.createElement("input", _extends({}, _this.props.attributes, _this.state.callbacks, {
                    value: option.value
                })),
                option.label
            );
        }),
        !this.state.valid && _react2.default.createElement(
            "span",
            { className: "error-msg" },
            this.props.errorMsg
        )
    );
}

function Select() {
    var _this2 = this;

    var className = this.props.attributes.className;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "select",
            _extends({ ref: function ref(c) {
                    _this2.formElement = c;
                } }, this.props.attributes, this.state.callbacks, { className: this.state.valid ? className : className + " invalid" }),
            _react2.default.createElement(
                "option",
                { disabled: true, selected: true },
                this.props.attributes.placeholder
            ),
            this.props.options.map(function (option) {
                return _react2.default.createElement(
                    "option",
                    { key: option.value, value: option.value, disabled: option.disabled },
                    option.label
                );
            })
        ),
        !this.state.valid && _react2.default.createElement(
            "span",
            { className: "error-msg" },
            this.props.errorMsg
        )
    );
}

function Input() {
    var _this3 = this;

    var className = this.props.attributes.className;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(this.props.tag, _extends({ ref: function ref(c) {
                _this3.formElement = c;
            } }, this.props.attributes, this.state.callbacks, { value: this.state.value, className: this.state.valid ? className : className + " invalid" })),
        !this.state.valid && _react2.default.createElement(
            "span",
            { className: "error-msg" },
            this.props.errorMsg
        )
    );
}