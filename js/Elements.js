import { colors } from "./variables/Colors.js";
export function makeBtn(text, color = colors.light, backgroundColor = colors.primary, options = {}) {
    const btn = document.createElement("button");
    btn.textContent = text;
    if (options.classList) {
        btn.classList.add(...options.classList.split(" ").filter((className) => className !== ""));
    }
    btn.style.backgroundColor = backgroundColor;
    btn.style.color = color;
    return btn;
}
export function makeImg(src, options = {}) {
    const img = document.createElement("img");
    img.src = src;
    img.width = 100;
    img.height = 100;
    img.classList.add("object-fit-cover");
    if (options.classList) {
        img.classList.add(...options.classList.split(" ").filter((className) => className !== ""));
    }
    return img;
}
export function makeCard(options = {}) {
    const card = document.createElement("div");
    card.classList.add("col", "card", "shadow", "h-100", "p-3", "m-3");
    card.style.width = "fit-content";
    card.style.cursor = "pointer";
    if (options.classList) {
        card.classList.add(...options.classList.split(" ").filter((className) => className !== ""));
    }
    return card;
}
// helpers
export function flipCard(img) {
    img.src = "../img/question.png";
}
export function seeCard(img, url) {
    img.src = url;
}
export function makeHeader(text, options = {}) {
    const header = document.createElement("h1");
    header.textContent = text;
    if (options.classList) {
        header.classList.add(...options.classList.split(" ").filter((className) => className !== ""));
    }
    return header;
}
