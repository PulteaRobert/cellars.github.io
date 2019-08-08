import mrEngls from './assets/MrEngls.png';
import bg from './assets/scene1.gif';
import pistolar from './assets/pistolar.png';
import sax from './assets/sound/SaxSeal.mp3';
import blackbg from './assets/Blackbg.jpg';
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
  {
    if: ['run'],
    speaker: 'Mr. Engls',
    dialogue: 'I shall run away from my problems',
  },
  {
    if: ['run', 'run-success'],
    squad: [],
    speaker: 'Pistolar',
    dialogue: "He's so damn fast",
  },
  {
    if: ['run', 'run-success'],
    squad: [mrEngls],
    encounters: [],
    speaker: 'Mr. Engls',
    dialogue: "Phew... look's like i lost him.. I can see the settlement already",
  },
  {
    if: ['run', 'run-success'],
    squad: [],
  },
  {
    if: ['run', 'run-success'],
    encounters: [],
    speaker: 'SCENE II',
    dialogue: '',
    image: blackbg,
  },
  {
    if: ['protecc'],
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
      },
      { text: 'grab a brush and put a little makeup', flags: 'protecc2' },
      { text: 'stop right there you criminal scum!', flags: 'protecc3' },
      { text: 'attacc', flags: 'protecc4' },
    ],
  },
  {
    if: ['protecc1', 'protecc1-succes'],
  },
];
