import React from 'react';
import PropTypes from 'prop-types';

/**
 * Container base class for use with React controller wrappers. Will render
 * it's children directly and get state from the initialState member.
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
 *     static initialState = {
 *         foobar: 'foobar'
 *     };
 *
 * }
 */
class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    render() {
        return this.props.children;
    }

}

/**
 * Type Rules
 * @name propTypes
 * @memberof Container
 * @type {Object}
 * @static
 */
Container.propTypes = {
    children: PropTypes.element.isRequired
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

export default Container;
