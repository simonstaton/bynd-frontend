export default class Cookies {

  static set(name, value = "") {
    switch (typeof value) {
      case 'object':
        value = escape(JSON.stringify(value));
        break;
      case 'string':
        value = escape(value);
        break;
      default:
        value = value.toString();
    }
    document.cookie = name + "=" + value;
  }

  static delete(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  static get(name) {
    let key, value, cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      key = cookies[i].substr(0, cookies[i].indexOf('=')).replace(/^\s+|\s+$/gm, '');
      value = cookies[i].substr(cookies[i].indexOf('=') + 1);
      if (key === name) {
        return unescape(value);
      }
    }
    return null;
  }

}
