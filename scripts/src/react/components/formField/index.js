import React from 'react';
import PropTypes from 'prop-types';
import * as views from './formField.view';

/**
 * FormField class used to handle frontend data validation
 * this covers all input types, set the relevant prop attributes
 * depending on what input type you are after.
 *
 * Will toggle an invalid class on the element and append an
 * errorMsg to the dom.
 *
 * Provides a few regexp's already for email, phone number, number,
 * alphanumeric etc
 *
 * @class FormField
 * @extends React.Component
 * @namespace scripts.react.FormField
 * @author Simon Staton [simon.staton@bynd.com]
 *
 * @example
 *    <FormField
 *            tag="input"
 *            validation="alphanumeric"
 *            errorMsg="This field is required and only accepts alpha numeric characters"
 *            required={true}
 *            attributes={{
 *                    type: 'text',
 *                    placeholder: 'Alpha numeric text input',
 *                    name: 'my-input',
 *                    id: 'my-input'
 *            }}
 *    />
 *
 * @properties
 *
 * [tag]
 * Type: string
 * Default: input
 * Options: input, select, textarea
 * Description: Determines the type of form field, if using input specify the attribute
 * type as text, radio or checkbox
 *
 * [errorMsg]
 * Type: string
 * Default: This field is invalid
 * Description: The error message that is appended after the input if it is required and
 * empty or if validation fails
 *
 * [required]
 * Type: boolean
 * Default: false
 * Description: If this field is required, will fail validation if empty
 *
 * [validation]
 * Type: regexp | string
 * Options: regexp object, regexp string, email, numeric, alpha, alphanumeric
 * Description: Field validation, accepts regexp or a predefined option
 *
 * [options]
 * Type: array
 * Example:
 *         options={[
 *                 {
 *                         value: 'option-1',
 *                         label: 'option 1'
 *                 },
 *                 {
 *                         value: 'option-2',
 *                         label: 'option 2'
 *                 }
 *         ]}
 * Description: An array of options for use with radio or select field tags
 *
 * [onChange]
 * Type: function
 * Description: A callback function for change events, callback contains event object
 *
 * [onBlur]
 * Type: function
 * Description: A callback function for blur events, callback contains event object
 *
 * [onFocus]
 * Type: function
 * Description: A callback function for focus events, callback contains event object
 *
 * [onValidate]
 * Type: function
 * Description: A callback function to be fired when field is validated, callback contains
 * valid boolean
 *
 * [attributes]
 * Type: object
 * Description: Assigns attributes directly to the form field
 *
 * [attributes.type]
 * Type: string
 * Default: text
 * Description: The type of input, to be used with the field tag of input to define a text or
 * checkbox input
 *
 * [attributes.placeholder]
 * Type: string
 * Description: The placeholder
 *
 * [attributes.name]
 * Type: string
 * Default: react-form-field
 * Description: The field name
 *
 * [attributes.id]
 * Type: string
 * Default: react-form-field
 * Description: The field id
 *
 * [attributes.className]
 * Type: string
 * Description: Class assigned to the field
 *
 * [attributes.value]
 * Type: string
 * Description: Prepopulate field value, will fire change events and validate if prop changes
 */
class FormField extends React.Component {

    /**
     * FormField constructor
     * @constructs FormField
     * @param {Object} props - react props
     */
    constructor(props) {
        super(props);

        /**
         * Initial state
         * @member state
         * @memberOf FormField
         * @type {Object}
         */
        this.state = {

            /**
             * value used as node attribute and for validation
             * @member value
             * @memberOf FormField.state
             * @type {String}
             */
            value: '',

            /**
             * flag for if input is valid, will toggle invalid class and messages
             * @member valid
             * @memberOf FormField.state
             * @type {Boolean}
             */
            valid: true,

            /**
             * event handlers, set here for prop spread on component
             * @member callbacks
             * @memberOf FormField.state
             * @type {Object}
             */
            callbacks: {
                onChange: this.handleChange.bind(this),
                onFocus: this.handleFocus.bind(this),
                onBlur: this.handleBlur.bind(this)
            }
        };
    }

    /**
     * Life cycle event - used for persisting state.value from props.attr.value
     * @method componentWillReceiveProps
     * @param    {object} props - the new props
     * @return {undefined}
     */
    componentWillReceiveProps(props) {
        if (props.attributes.value) this.setState({ value: props.attributes.value });
    }

    /**
     * Main validation handler, value passed from event.target.value or if not supplied
     * will validate against the current state
     * @method validate
     * @param    {string} value - either the elements value or the current state
     * @return {boolean} if value is valid
     */
    validate(value = this.state.value || '') {
        // Check if empty and required
        let isValid = (this.props.required && value) || !this.props.required;

        // Test regexp validation
        if (this.props.validation && value) {
            if (this.props.validation instanceof RegExp) {
                isValid = this.props.validation.test(value);
            } else if (FormField.regexp[this.props.validation]) {
                isValid = FormField.regexp[this.props.validation].test(value);
            } else {
                isValid = new RegExp(this.props.validation).test(value);
            }
        }

        // edge case for checkboxes
        if (this.props.required && this.props.attributes.type === 'checkbox' && !this.formElement.checked) {
            isValid = false;
        }

        // Parent callback
        if (this.props.onValidate) this.props.onValidate(isValid);

        // Update state
        this.setState({ valid: isValid });

        return isValid;
    }

    /**
     * Change event handler, used to fire validation
     * @method handleChange
     * @param    {object} event - native DOM event
     * @return {undefined}
     */
    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) this.props.onChange(event);
    }

    /**
     * Focus event handler, used to fire any callbacks
     * @method handleFocus
     * @param    {object} event - native DOM event
     * @return {undefined}
     */
    handleFocus(event) {
        if (this.props.onFocus) this.props.onFocus(event);
    }

    /**
     * Blur event handler, used to fire any callbacks
     * @method handleBlur
     * @param    {object} event - native DOM event
     * @return {undefined}
     */
    handleBlur(event) {
        this.validate(event.target.value);
        if (this.props.onBlur) this.props.onBlur(event);
    }

    /**
     * render lifecycle method
     * @method render
     * @return {JsxElement} the jsx rendering
     */
    render() {
        // Return relevant view depending on the type of attribute
        if (this.props.attributes.type === 'radio') {
            return views.Radio.call(this);
        } else if (this.props.tag === 'select') {
            return views.Select.call(this);
        }
        return views.default.call(this);
    }

}

/**
 * Pre-defined validation rules, used when setting validation prop as a string
 * @name regexp
 * @memberof FormField
 * @type {Object}
 * @static
 */
FormField.regexp = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    numeric: /^[0-9]*$/,
    alpha: /^[ a-zA-Z]*$/,
    alphanumeric: /^[ a-z0-9]*$/i
};

/**
 * Type Rules
 * @name propTypes
 * @memberof FormField
 * @type {Object}
 * @static
 */
FormField.propTypes = {
    tag: PropTypes.string,
    attributes: PropTypes.shape({
        type: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
        className: PropTypes.string,
        value: PropTypes.string
    }),
    errorMsg: PropTypes.string,
    required: PropTypes.bool,
    validation: PropTypes.oneOfType([PropTypes.string, React.PropTypes.object]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onValidate: PropTypes.func,
    options: React.PropTypes.arrayOf(React.PropTypes.object)
};

/**
 * Default Props
 * @name defaultProps
 * @memberof FormField
 * @type {Object}
 * @static
 */
FormField.defaultProps = {
    tag: 'input',
    attributes: {
        type: 'text',
        placeholder: '',
        name: 'form-field',
        id: 'form-field',
        className: 'form-field',
        value: ''
    },
    errorMsg: 'This field is invalid'
};

export default FormField;
