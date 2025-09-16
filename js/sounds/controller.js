export function playVideo(audio, playSpeed = false) {
    if (playSpeed) {
        audio.playbackRate = 1.7;
    }
    audio.play();
}
export function stopVideo(audio) {
    audio.pause();
}
export function setVolume(audio, volume) {
    audio.volume = volume;
}
