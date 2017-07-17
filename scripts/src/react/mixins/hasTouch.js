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
export default base => class HasTouch extends base {

    /**
     * Life cycle event - used for binding touchEvents to hasTouch ref
     * @method componentDidMount
     * @return {undefined}
     */
    componentDidMount() {
        if (this.touchStart) this.refs.hasTouch.addEventListener('touchstart', this.touchStart.bind(this));
        if (this.touchMove) this.refs.hasTouch.addEventListener('touchmove', this.touchMove.bind(this));
        if (this.touchCancel) this.refs.hasTouch.addEventListener('touchcancel', this.touchCancel.bind(this));
        if (this.touchEnd) this.refs.hasTouch.addEventListener('touchend', this.touchEnd.bind(this));
    }
};
