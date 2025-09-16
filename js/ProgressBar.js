// ProgressBar.ts
export function makeProgressBar(max) {
    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress", "my-4");
    progressContainer.style.height = "30px";
    progressContainer.style.width = "50%";
    progressContainer.style.margin = "0 auto";
    const progress = document.createElement("div");
    progress.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated");
    progress.setAttribute("role", "progressbar");
    progress.style.width = "0%";
    progress.style.fontWeight = "bold";
    progress.style.fontSize = "1rem";
    //   progress.textContent = `0 / ${max}`;
    progressContainer.appendChild(progress);
    return { progressContainer, progress };
}
export function updateProgressBar(progress, value, max) {
    const percent = Math.round((value / max) * 100);
    progress.style.width = `${percent}%`;
    //   progress.textContent = `${value} / ${max}`;
}
export function removeProgressBar(progress) {
    var _a;
    (_a = progress.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(progress);
}
