import { Howl, Howler } from 'howler';

import bgs from '@/assets/backgrounds';

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
    let yiq = (bgColor.r * 299 + bgColor.g * 587 + bgColor.b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  },
  sceneTransition: scene => {
    return {
      scene: `${scene}`,
      encounters: [],
      squad: [],
      speaker: `TO BE\nCONTINUED`,
      dialogue: '(game is not done yet)',
      image: bgs.black,
      color: { r: 0, g: 0, b: 0 },
    };
  },
};
