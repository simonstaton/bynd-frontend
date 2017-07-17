import 'babel-polyfill';
import DOM from './dom';

describe('dom utility class', () => {
    it('should check for access to the DOM', async () => {
        expect(DOM.canUse).toEqual(true); // accessible in jest
    });
});
