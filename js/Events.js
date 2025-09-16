export function attachEvent(element, eventName, action) {
    element === null || element === void 0 ? void 0 : element.addEventListener(eventName, (event) => {
        action();
    });
}
