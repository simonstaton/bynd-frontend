import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import { mixin } from '../../../index';
import HasTouch from './hasTouch';

describe('HasTouch react mixin', () => {
    const eventMap = {};
    const mocks = {
        touchstart: jest.fn(),
        touchmove: jest.fn(),
        touchend: jest.fn(),
        touchcancel: jest.fn()
    };

    beforeAll(() => {
        // Simulate DOM events directly - unsupported via enzyme
        HTMLElement.prototype.addEventListener = jest // eslint-disable-line no-undef
            .genMockFn()
            .mockImplementation((event, cb) => {
                eventMap[event] = cb;
            });

        class MyComponent extends mixin(React.Component).with(HasTouch) {
            touchStart() { // eslint-disable-line class-methods-use-this
                mocks.touchstart();
            }

            touchMove() { // eslint-disable-line class-methods-use-this
                mocks.touchmove();
            }

            touchEnd() { // eslint-disable-line class-methods-use-this
                mocks.touchend();
            }

            touchCancel() { // eslint-disable-line class-methods-use-this
                mocks.touchcancel();
            }

            render() {
                return (
                    <div
                      className="handler"
                      ref="hasTouch"  // eslint-disable-line react/no-string-refs
                    />
                );
            }
        }

        mount(<MyComponent />);
    });

    it('should bind touchstart to this.refs.hasTouch and invoke this.touchStart', () => {
        eventMap.touchstart();
        expect(mocks.touchstart).toHaveBeenCalled();
    });

    it('should bind touchmove to this.refs.hasTouch and invoke this.touchMove', () => {
        eventMap.touchmove();
        expect(mocks.touchmove).toHaveBeenCalled();
    });

    it('should bind touchcancel to this.refs.hasTouch and invoke this.touchCancel', () => {
        eventMap.touchcancel();
        expect(mocks.touchcancel).toHaveBeenCalled();
    });

    it('should bind touchend to this.refs.hasTouch and invoke this.touchEnd', () => {
        eventMap.touchend();
        expect(mocks.touchend).toHaveBeenCalled();
    });
});
