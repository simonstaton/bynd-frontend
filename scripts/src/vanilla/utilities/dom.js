export default class DOM {

  static canUse = !!(
    (typeof window !== 'undefined' && window.document && window.document.createElement)
  );

  static body = document.getElementsByTagName("BODY")[0];

}
