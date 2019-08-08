import utils from '@/utils';

import bgs from '@/assets/backgrounds';
import chr from '@/assets/characters';
import sfx from '@/assets/sounds';

import choiceRun from './choices/run';
import choiceProtect from './choices/protect';
import choiceDistract from './choices/distract';

export default [
  {
    image: bgs.forest,
    speaker: '',
    color: utils.rgb(138, 0, 236),
  },
  {
    squad: [chr.englsCornered],
    speaker: 'Mr Engls',
    dialogue: 'No god, pliz no!',
    sfx: sfx.sax,
  },
  {
    encounters: [chr.salamandr],
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
];
