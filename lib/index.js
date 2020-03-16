// extracted from vue 2.1.x
export function setBooleanAttr(el, key, value) {
    if (value == null || value === false)
        el.removeAttribute(key);
    else
        el.setAttribute(key, key);
}
export function setEnumeratedAttr(el, key, value) {
    el.setAttribute(key, value == null || value === false || value === 'false' ? 'false' : 'true');
}
export function setOrRemoveAttr(el, key, value) {
    if (value == null || value === false)
        el.removeAttribute(key);
    else
        el.setAttribute(key, value);
}
//# sourceMappingURL=index.js.map