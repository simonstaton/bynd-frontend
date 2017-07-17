export default class DOM {
    static get canUse() {
        return !!(
            (typeof window !== 'undefined' && window.document && window.document.createElement)
        );
    }

    static get body() {
        if (!DOM.$body) DOM.$body = document.getElementsByTagName('BODY')[0];
        return DOM.$body;
    }
}
