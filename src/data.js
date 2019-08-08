import mrEngls from './assets/mrengls.png';
import bg from './assets/scene1.gif';
import pistolar from './assets/pistolar.png';
import sax from './assets/sound/SaxSeal.mp3';
import salvede from './assets/SalSeesYou.png';

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
            chance: 0.4,
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
    choices: [
      {
        text: 'grab a sharp stone and aim at the head',
        flags: [
          'protecc1',
          {
            flag: 'protecc1-succes',
            chance: 0.5,
          },
        ],
        flags: [
          'protecc1',
          {
            flag: 'protecc1-fail',
            chance: 0.5,
          },
        ],
      },
      {
        text: 'grab a brush and put a little makeup',
        flags: 'protecc2',
      },
      {
        text: 'stop right there you criminal scum!',
        flags: 'protecc3',
      },
      {
        text: 'attacc',
        flags: 'protecc4',
      },
    ],
  },
  {
    if: ['protecc1', 'protecc1-succes'],
    encounters: [salvede],
  },
];
