import 'babel-polyfill';
import truncate from './truncate';

describe('truncate helper function', () => {
  it('should truncate a string to the nearest word', async () => {
    const theString = 'The quick brown fox jumped over the lazy dog';
    const truncated = truncate(theString, 20);
    expect(truncated).toEqual('The quick brown fox...');
  });
});
