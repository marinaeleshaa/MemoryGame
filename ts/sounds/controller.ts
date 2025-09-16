export function playVideo(audio: HTMLAudioElement , playSpeed:boolean =false) {
  if(playSpeed){
    audio.playbackRate =1.7
  }
  audio.play();
}

export function stopVideo(audio: HTMLAudioElement) {
  audio.pause();
}

export function setVolume(audio: HTMLAudioElement, volume: number) {
  audio.volume = volume;
}


