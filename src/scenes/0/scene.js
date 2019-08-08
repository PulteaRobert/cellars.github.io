import utils from '@/utils';

import mrEngls from '@/assets/mr.engls.png';
import bg from '@/assets/scene1.gif';
import pistolar from '@/assets/pistolar.salmendr.png';
import sax from '@/assets/sound/SaxSeal.mp3';
import blackbg from '@/assets/Blackbg.jpg';

import choiceRun from './choices/run';
import choiceProtect from './choices/protect';
import choiceDistract from './choices/distract';

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
    speaker: 'Salmandr',
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
            chance: 0.5,
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
  ...choiceRun,
  ...choiceProtect,
  ...choiceDistract,
  {
    encounters: [],
    squad: [],
    speaker: 'SCENE II',
    dialogue: '',
    image: blackbg,
  },
];
