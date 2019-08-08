import { Howl, Howler } from 'howler';

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
    if (!file) {
      return;
    }

    if (file === 'stop') {
      Howler.unload();
    }

    const sound = new Howl({
      src: file,
    });

    sound.play();
  },
  rgb: (r, g, b) => ({
    r,
    g,
    b,
  }),
  textColor: bgColor => {
    let r = bgColor.r * 255,
      g = bgColor.g * 255,
      b = bgColor.b * 255;
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 196 ? 'black' : 'white';
  },
};
