import farmer from './assets/char1.png';
import farmer2 from './assets/char2.png';
import dinosaur from './assets/char3.jpg';

import holland from './assets/bg1.png';

export default [
  {
    image: holland,
  },
  {
    squad: [farmer],
    dialogue: 'bro',
  },
  {
    squad: [dinosaur],
    encounters: [farmer2],
    dialogue: 'im a fucking dinosaur',
    choices: [
      {
        text: 'no',
        flag: 'flagg',
      },
      {
        text: 'whip the salves',
        flag: 'f',
      },
    ],
  },
  {
    if: ['f'],
    squad: [dinosaur],
    encounters: [farmer2],
    dialogue: 'that racist bro,die',
  },
  {
    if: ['flagg'],
    squad: [dinosaur],
    encounters: [farmer2],
    dialogue: 'yes',
  },
  {
    encounters: [],
    dialogue: 'gg',
  },
];
