
import throttle from 'lodash.throttle' ; 
import Player from '@vimeo/player';


const iframeEl = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(iframeEl);

const onSaveTime = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e.seconds);
};
const parsed = parseInt(localStorage.getItem('videoplayer-current-time'));
console.log(parsed);

const throttledSavedCurrentime = throttle(onSaveTime, 1000);
player.on('timeupdate', throttledSavedCurrentime);

player.setCurrentTime(parsed);
