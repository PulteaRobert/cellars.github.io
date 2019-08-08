import maf1 from './assets/ricardio.png';
import maf2 from './assets/mafia.png';
import gift from './assets/gift.png';

import police from './assets/police.png';

import inside from './assets/forest.pixel.prple.jpg';
import outside from './assets/outside.jpeg';

import sax from './assets/sound/test.mp3';
import nush from './assets/sound/test2.mp3';

export default [
  {
    image: inside,
    color: '#28023c',
  },
  {
    squad: [maf1],
    speaker: 'mafia man',
    dialogue: 'where is ricardio?? he is late',
  },
  {
    encounters: [maf2],
    speaker: 'ricardio',
    dialogue: 'i am',
    sfx: sax,
  },
  {
    dialogue: 'he',
    sfx: nush,
  },
  {
    dialogue: 're',
  },
  {
    speaker: 'mafia man',
    dialogue: 'did you bring it?',
  },
  {
    speaker: 'ricardio',
    dialogue: 'of course',
    encounters: [maf2, gift],
  },
  {
    speaker: 'christmas box',
    dialogue: 'i am full of illicit drugs!',
  },
  {
    speaker: 'police car alarm',
    dialogue: 'WEEEEE WOOOOOO WEEEEE WOOOO',
  },
  {
    speaker: 'police car alarm',
    dialogue: 'WEEEEEEEEE WOOOO WEEEEEE WOOO',
  },
  {
    speaker: 'police car alarm',
    dialogue: 'WEEE WOOOOOOOO WEEEEE WOOOOOoooooooo...',
  },
  {
    speaker: 'police car alarm',
    dialogue: 'beep beep',
  },
  {
    speaker: 'mafia man',
    dialogue: 'oh no it is the police? what is crossing your mind about our dire situation lad?',
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
    encounters: [maf1, maf2, gift],
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
    squad: [maf1],
    encounters: [maf2],
    speaker: 'mafia man',
    dialogue: 'we escaped',
  },
  {
    if: ['run'],
    squad: [police],
    encounters: [maf1, maf2],
    dialogue: 'nvm',
  },
  {
    squad: [],
    encounters: [],
    speaker: 'the en',
    dialogue: 'd',
  },
];
