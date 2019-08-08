import mrEngls from './assets/mr.engls.png';
import bg from './assets/scene1.gif';
import pistolar from './assets/pistolar.salmendr.png';
import sax from './assets/sound/SaxSeal.mp3';
import blackbg from './assets/Blackbg.jpg';
import utils from './utils';

import pathRun from './paths/run';
import pathProtect from './paths/protect';
import pathDistract from './paths/distract';

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
            flag: 'run-success',
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
  ...pathRun,
  ...pathProtect,
  ...pathDistract,
  {
    encounters: [],
    speaker: 'SCENE II',
    dialogue: '',
    image: blackbg,
  },
];
