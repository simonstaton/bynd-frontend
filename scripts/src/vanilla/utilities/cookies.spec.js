import 'babel-polyfill';
import Cookies from './cookies';

describe('cookies utility class', () => {
  it('should set cookies', async () => {
    document.cookie = '';
    Cookies.set('foo', 'bar');
    expect(document.cookie).toEqual('; foo=bar');
  });

  it('should get cookies', async () => {
    document.cookie = 'bar=foo';
    expect(Cookies.get('bar')).toEqual('foo');
  });

  it('should delete cookies', async () => {
    document.cookie = 'bar=foo';
    Cookies.delete('bar');
    expect(Cookies.get('bar')).toEqual(null);
  });
});
