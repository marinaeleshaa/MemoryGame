var _a;
import { makeBtn, makeCard, makeHeader, makeImg } from "./Elements.js";
import { appendChild, routeTo } from "./Dom.js";
import { attachEvent } from "./Events.js";
import { colors } from "./variables/Colors.js";
import { playVideo, setVolume } from "./sounds/controller.js";
import { mainAudio, winAudio, loseAudio } from "./sounds/DomMusic.js";
import { makeProgressBar, removeProgressBar, updateProgressBar } from "./ProgressBar.js";
// Play music on page load
window.addEventListener("load", () => {
    playVideo(mainAudio);
});
// ---------- Index Page Logic ----------
const heroContainer = document.querySelector("#HeroImgContainer");
if (heroContainer) {
    const playBtn = makeBtn("Play", "white", `${colors.primary}`, {
        classList: "btn btn-lg rounded-pill px-4 py-2",
    });
    attachEvent(playBtn, "click", () => {
        playVideo(mainAudio);
        routeTo("/pages/game.html");
    });
    appendChild(heroContainer, playBtn);
}
// ---------- Game Page Logic ----------
const container = document.querySelector("#contentContainer");
if (container) {
    const cardBackSrc = "../img/question.png";
    let imgUrls = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
    ];
    imgUrls = imgUrls.sort(() => Math.random() - 0.5);
    // Variables game
    let clickedCards = [];
    let matchedCards = 0;
    // ✅ Progress bar ONLY created in game.html
    const totalMatches = imgUrls.length;
    const { progressContainer, progress } = makeProgressBar(totalMatches);
    appendChild((_a = container.parentElement) !== null && _a !== void 0 ? _a : document.body, progressContainer);
    // Render cards
    imgUrls.forEach((url, index) => {
        const card = makeCard({ classList: "card p-2" });
        const cardImg = makeImg(cardBackSrc);
        cardImg.setAttribute("data-index", index.toString());
        cardImg.setAttribute("data-url", url);
        cardImg.addEventListener("click", () => {
            if (clickedCards.length === 2 || cardImg.src.includes(url))
                return;
            cardImg.src = url;
            clickedCards.push(cardImg);
            if (clickedCards.length === 2) {
                checkMatch();
            }
        });
        card.appendChild(cardImg);
        appendChild(container, card);
    });
    // check match logic
    function checkMatch() {
        const [firstCard, secondCard] = clickedCards;
        let state = false;
        if (firstCard.dataset.url === secondCard.dataset.url) {
            state = true;
            firstCard.style.pointerEvents = "none";
            secondCard.style.pointerEvents = "none";
            matchedCards += 2;
            setVolume(mainAudio, 0.1);
            playVideo(winAudio, true);
            updateProgressBar(progress, matchedCards, imgUrls.length);
            if (matchedCards === imgUrls.length) {
                setTimeout(showWinScreen, 500);
            }
        }
        else {
            state = true;
            setVolume(mainAudio, 0.1);
            playVideo(loseAudio, true);
            setTimeout(() => {
                firstCard.src = cardBackSrc;
                secondCard.src = cardBackSrc;
            }, 1000);
        }
        if (state) {
            setTimeout(() => {
                setVolume(mainAudio, 1);
            }, 1500);
        }
        clickedCards = [];
        state = false;
    }
    function showWinScreen() {
        if (!container)
            return;
        container.innerHTML = "";
        container.className = "win-screen";
        const card = document.createElement("div");
        card.classList.add("win-card");
        const title = makeHeader("🏆 You Won", { classList: "win-title" });
        const replayBtn = makeBtn("Replay", "white", `${colors.secondary}`, {
            classList: "win-btn btn-replay",
        });
        attachEvent(replayBtn, "click", () => location.reload());
        const homeBtn = makeBtn("Back Home", "white", `${colors.primary}`, {
            classList: "win-btn btn-home",
        });
        attachEvent(homeBtn, "click", () => routeTo("/index.html"));
        const buttons = document.createElement("div");
        buttons.classList.add("win-buttons");
        buttons.appendChild(replayBtn);
        buttons.appendChild(homeBtn);
        card.appendChild(title);
        card.appendChild(buttons);
        container === null || container === void 0 ? void 0 : container.appendChild(card);
        removeProgressBar(progressContainer);
    }
}
