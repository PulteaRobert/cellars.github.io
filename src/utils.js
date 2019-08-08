import { Howl, Howler } from 'howler';

import bgBlack from './assets/Blackbg.jpg';

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
    const toRoman = num => {
      if (isNaN(num)) return NaN;
      let digits = String(+num).split(''),
        key = [
          '',
          'C',
          'CC',
          'CCC',
          'CD',
          'D',
          'DC',
          'DCC',
          'DCCC',
          'CM',
          '',
          'X',
          'XX',
          'XXX',
          'XL',
          'L',
          'LX',
          'LXX',
          'LXXX',
          'XC',
          '',
          'I',
          'II',
          'III',
          'IV',
          'V',
          'VI',
          'VII',
          'VIII',
          'IX',
        ],
        roman = '',
        i = 3;
      while (i--) roman = (key[+digits.pop() + i * 10] || '') + roman;
      return Array(+digits.join('') + 1).join('M') + roman;
    };

    return {
      scene: `${scene}`,
      encounters: [],
      squad: [],
      speaker: `SCENE ${toRoman(scene)}`,
      dialogue: '',
      image: bgBlack,
      color: { r: 0, g: 0, b: 0 },
    };
  },
};
