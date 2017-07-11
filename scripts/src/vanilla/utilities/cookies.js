export default class Cookies {
  static set(name, value = '') {
    let data = value;
    switch (typeof data) {
      case 'object':
        data = escape(JSON.stringify(data));
        break;
      case 'string':
        data = escape(data);
        break;
      default:
        data = data.toString();
    }
    document.cookie = `${name}=${data}`;
  }

  static delete(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }

  static get(name) {
    let key;
    let value;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i += 1) {
      key = cookies[i].substr(0, cookies[i].indexOf('=')).replace(/^\s+|\s+$/gm, '');
      value = cookies[i].substr(cookies[i].indexOf('=') + 1);
      if (key === name) {
        return unescape(value);
      }
    }
    return null;
  }
}
