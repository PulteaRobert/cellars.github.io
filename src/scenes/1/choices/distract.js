import chr from '@/assets/characters';
import sfx from '@/assets/sounds';

export default [
  {
    if: ['distract'],
    speaker: '',
    dialogue: '',
    sfx: sfx.violinAirhorn,
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
        flags: [
          'wil?',
          {
            flag: 'iftheygetshot',
            chance: 0.5,
          },
        ],
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
    sfx: sfx.offer,
    encounters: [chr.salamandrCurious],
  },
  {
    if: ['collabs'],
    sfx: sfx.pinacollada,
    encounters: [chr.salamandrCurious],
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
    encounters: [chr.salamandrCurious],
  },
  {
    if: ['iftheygetshot'],
    dialogue: '4123432423432',
  },
];
