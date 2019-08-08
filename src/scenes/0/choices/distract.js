import sadviolin from '@/assets/sound/sadv.mp3';
import tgftheme from '@/assets/sound/tgftheme.mp3';
import pinacollada from '@/assets/sound/pinacollada.mp3';
import wiz from '@/assets/sound/wutizluv.mp3';
import salamandrlooking from '@/assets/SalSeesYou.png';

export default [
  {
    if: ['distract'],
    speaker: '',
    dialogue: '',
    sfx: sadviolin,
  },
  {
    if: ['distract'],
    sfx: 'stop',
    speaker: 'You',
    choices: [
      {
        text: 'i`ll make you an offer you can`t refuse',
        flags: [
          'offer',
          {
            flag: 'offer-success',
            chance: 1,
          },
        ],
      },
      {
        text: '...if you like pina colladas',
        flags: 'collabs',
      },
      {
        text: 'what is love?',
        flags: 'wil?',
      },
    ],
  },
  {
    if: ['offer-success'],
    choices: [
      {
        text: 'Next',
        flags: [
          'offer',
          {
            flag: 'iftheygetshot',
            chance: 0.5,
          },
        ],
      },
    ],
    sfx: tgftheme,
    encounters: [salamandrlooking],
  },
  {
    if: ['collabs'],
    sfx: pinacollada,
    encounters: [salamandrlooking],
    dialogue: 'fndfjdsljfdsj',
    choices: [
      {
        text: 'Next',
        flags: [
          'offer',
          {
            flag: 'iftheygetshot',
            chance: 0.5,
          },
        ],
      },
    ],
  },
  {
    if: ['wil?'],
    choices: [
      {
        text: 'Next',
        flags: [
          'offer',
          {
            flag: 'iftheygetshot',
            chance: 0.5,
          },
        ],
      },
    ],
    sfx: wiz,
    encounters: [salamandrlooking],
  },
  {
    if: ['iftheygetshot'],
    dialogue: '4123432423432',
  },
];
