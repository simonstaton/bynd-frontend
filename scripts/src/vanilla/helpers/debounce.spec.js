import 'babel-polyfill';
import debounce from './debounce';

describe('debounce helper function', () => {
  it('should debounce function calls', () => {

    jest.useFakeTimers();

    const callback = jest.fn();
    const debounced = debounce(callback, 10);

    // Invoke twice - should run once
    debounced();
    debounced();

    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toEqual(1);
  });
});
