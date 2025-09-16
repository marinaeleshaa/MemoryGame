export function appendChild(parent, child) {
    parent === null || parent === void 0 ? void 0 : parent.appendChild(child);
}
export function routeTo(url) {
    window.location.href = url;
}
