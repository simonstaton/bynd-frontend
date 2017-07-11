import 'babel-polyfill';
import throttle from './throttle';

describe('throttle helper function', () => {
  it('should throttle function calls', async () => {
    jest.useRealTimers();

    const callback = jest.fn();
    const throttled = throttle(callback, 2); // throttle every 5ms

    // invoke every 1ms for 10ms
    let executions = 0;
    const interval = setInterval(() => {
      if (executions >= 10) {
        clearInterval(interval);
      } else {
        throttled();
        executions += 1;
      }
    }, 1);

    // jest async callback
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback.mock.calls.length);
      }, 60); // check call count after 60ms
    });

    const iterations = await request;
    expect(iterations).toEqual(5);
  });
});
