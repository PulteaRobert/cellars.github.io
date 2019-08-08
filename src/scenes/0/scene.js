import utils from '@/utils';

import bgForest from '@/assets/scene1.gif';

import charMrEngls from '@/assets/mr.engls.png';
import charSalamandr from '@/assets/pistolar.salmendr.png';

import sfxSax from '@/assets/sound/SaxSeal.mp3';

import choiceRun from './choices/run';
import choiceProtect from './choices/protect';
import choiceDistract from './choices/distract';

export default [
  utils.sceneTransition('SCENE I'),
  {
    scene: '1',
    image: bgForest,
    speaker: '',
    color: utils.rgb(138, 0, 236),
  },
  {
    squad: [charMrEngls],
    speaker: 'Mr Engls',
    dialogue: 'No god, pliz no!',
    sfx: sfxSax,
  },
  {
    encounters: [charSalamandr],
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
