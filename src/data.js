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
            flags: 'run-success',
            chance: 1,
          },
        ],
      },
      {
        text: 'protecc Mr. Engls',
        flags: 'protecc',
      },
      {
        text: 'distract with a noise',
        flags: 'distract',
      },
    ],
  },
  {
    if: ['run', 'run-success'],
    squad: [],
    encounters: [mrEngls],
    speaker: '',
    dialogue: '',
    // sfx: runInContext;?
  },
  {
    if: ['run', 'run-success'],
    squad: [],
    speaker: 'Mr. Engls',
    dialogue: 'Phew, I managed to lose him!',
  },
  {
    if: ['run', 'run-success'],
    dialogue: 'I can see the settlement!',
  },
];
