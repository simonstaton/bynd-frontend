import 'babel-polyfill';
import throttle from './throttle';

describe('throttle helper function', () => {
  it('should throttle function calls', async () => {
    jest.useRealTimers();

    const callback = jest.fn();
    const throttled = throttle(callback, 100); // throttle every 100ms

    // invoke every 50ms for 500ms
    let executions = 0;
    const interval = setInterval(() => {
      if (executions >= 10) {
        clearInterval(interval);
      } else {
        throttled();
        executions += 1;
      }
    }, 50);

    // jest async callback
    const request = new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback.mock.calls.length);
      }, 501); // check call count after 60ms
    });

    const iterations = await request;
    expect(iterations).toEqual(5);
  });
});
