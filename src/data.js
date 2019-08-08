<<<<<<< HEAD
import engls from './assets/mr.engls.png';
import pistolar from './assets/pistolar.png';
import maf2 from './assets/mafia.png';
import gift from './assets/gift.png';

import police from './assets/police.png';

import background from './assets/forest.pixel.prple.jpg';
import outside from './assets/outside.jpeg';

export default [
  {
    image: background,
  },
  {
    squad: [engls],
    speaker: 'Mr. Engls',
    dialogue: 'no god, pliz no!',
  },
  {
    encounters: [pistolar],
    speaker: 'Pistolar',
    dialogue: '*heh*',
  },
  {
    speaker: 'What will he do?',
    dialogue: '',
    choices: [
      {
        text: 'RUN!',
        flags: 'run',
      },
      {
        text: 'Hide',
        flags: [
          'hide',
          {
            flag: 'success',
            chance: 0.2,
          },
        ],
      },
    ],
  },
  {
    speaker: 'ricardio',
    dialogue: 'we should',
  },
  {
    if: ['run'],
    speaker: 'ricardio',
    dialogue: 'r',
  },
  {
    if: ['run'],
    speaker: 'ricardio',
    dialogue: 'u',
  },
  {
    if: ['run'],
    speaker: 'ricardio',
    dialogue: 'n',
  },
  {
    if: ['hide'],
    speaker: 'ricardio',
    dialogue: 'h',
  },
  {
    if: ['hide'],
    speaker: 'ricardio',
    dialogue: 'i',
  },
  {
    if: ['hide'],
    speaker: 'ricardio',
    dialogue: 'd',
  },
  {
    if: ['hide'],
    speaker: 'ricardio',
    dialogue: 'e',
  },
  {
    speaker: 'ricardio',
    dialogue: '!',
  },
  {
    speaker: 'mafia man',
    dialogue: 'wonderous idea chap',
  },
  {
    if: ['run'],
    squad: [],
    encounters: [],
    speaker: 'ambient sounds',
    dialogue: '*sounds of running*',
  },
  {
    if: ['hide'],
    dialogue:
      'we shall hide behind that chrismas gift box full of illicit drugs! it will be inconspicuous!!',
  },
  {
    if: ['hide'],
    squad: [],
    encounters: [maf2, gift],
    speaker: '',
    dialogue: '',
  },
  {
    if: ['hide'],
    squad: [police],
    speaker: 'police',
    dialogue: 'tHIS iS tHE pOLICE kEEP yOUR hANDS wHERE i cAN sEE tHEM!',
  },
  {
    if: ['hide'],
    dialogue: '......',
  },
  {
    if: ['hide', 'success'],
    dialogue: 'wtf santa lives here',
  },
  {
    if: ['hide', '!success'],
    dialogue: 'you know i can see you right?',
  },
  {
    if: ['run'],
    image: outside,
    speaker: 'outside',
    dialogue: '',
  },
  {
    if: ['run'],
    encounters: [maf2],
    speaker: 'mafia man',
    dialogue: 'we escaped',
  },
  {
    if: ['run'],
    squad: [police],
    encounters: [maf2],
    dialogue: 'nvm',
=======
import mrEngls from './assets/MrEngls.png';
import bg from './assets/ForestPixelPurple.jpg';
import pistolar from './assets/pistolar.png';

import sax from './assets/sound/test.mp3';
import nush from './assets/sound/test2.mp3';

export default [
  {
    image: bg,
  },
  {
    squad: [mrEngls],
    speaker: 'Mr Engls',
    dialogue: 'no god, pliz no!',
>>>>>>> 09604428bd753584853b2cefc3dfd604e4463962
  },
  {
    encounters: [pistolar],
    speaker: 'pistolar',
    dialogue: 'heeh',
  },
];
