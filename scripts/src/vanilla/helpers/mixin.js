/**
 * mixin helper for superclass mixins
 *
 * @example
 * class MyComp extends mixin(React.Component).with(HasTouch, HasDrag) {}
 */
class MixinBuilder {
    constructor(base) {
        this.base = base;
    }

    with(...mixins) {
        return mixins.reduce((theClass, mixin) => mixin(theClass), this.base);
    }
}

const mixin = base => new MixinBuilder(base);

export default mixin;
