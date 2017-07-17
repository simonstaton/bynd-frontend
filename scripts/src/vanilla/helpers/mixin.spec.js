import 'babel-polyfill';
import mixin from './mixin';

describe('mixin helper function', () => {
    it('should mixin a sub-class', () => {
        class MySuper {
            constructor() {
                this.didSuper = true;
            }
        }

        const TheMixin = base => class MyMixin extends base {
            mixinMethod() {
                this.didMixin = true;
            }
        };

        class MyChild extends mixin(MySuper).with(TheMixin) {
            constructor() {
                super();
                this.didChild = true;
                this.mixinMethod();
            }
        }

        const Instance = new MyChild();
        expect(Instance.didSuper).toEqual(true);
        expect(Instance.didChild).toEqual(true);
        expect(Instance.didMixin).toEqual(true);
    });
});
