import { Howl } from 'howler';

/* eslint-disable */
export default {
  includes: (ar1, ar2) => {
    for (let el of ar2) {
      if (el[0] === '!') {
        if (ar1.indexOf(el.slice(1, el.length)) > -1) {
          return false;
        }
      } else if (ar1.indexOf(el) < 0) {
        return false;
      }
    }
    return true;
  },
  playSound: file => {
    if (!file) return;

    const sound = new Howl({
      src: file,
    });

    sound.play();
  },
};
