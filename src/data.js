import mrEngls from './assets/MrEngls.png';
import bg from './assets/scene1.gif';
import pistolar from './assets/pistolar.png';
import sax from './assets/sound/SaxSeal.mp3';

import utils from './utils';

export default [
  {
    image: bg,
    color: utils.rgb(138, 0, 236),
  },
  {
    squad: [mrEngls],
    speaker: 'Mr Engls',
    dialogue: 'No god, pliz no!',
    sfx: sax,
  },
  {
    encounters: [pistolar],
    speaker: 'Pistolar',
    dialogue: 'heeh',
    sfx: 'stop',
  },
  {
    choices: [
      {
        text: 'RUN!',
        flags: [
          'run',
          {
            flag: 'success',
            chance: 0.5,
          },
        ],
      },
      {
        text: 'protecc Mr. Engls',
        flag: 'protecc',
      },
      {
        text: 'distract with a noise',
        flag: 'distract',
      },
    ],
  },
  {
    if: ['run'],

  },
];
