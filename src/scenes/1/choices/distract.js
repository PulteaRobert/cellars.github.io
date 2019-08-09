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
    text: 'i`ll make you an offer you can`t refuse',
    choices: [
      {
        text: 'i`ll make you an offer you can`t refuse',
        flags: [
          'offer',
          {
            flag: 'iftheygetshot',
            chance: 0.5,
          },
        ],
      },

      {
        text: '...if you like pina colladas',
        flags: [
          'collabs',
          {
            flag: 'iftheygetshot',
            chance: 0.5,
          },
        ],
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
    if: ['offer'],
    sfx: sfx.offer,
    dialogue: '(salamandr sees you)',
    encounters: [chr.salamandrCurious],
  },

  {
    if: ['collabs'],
    sfx: sfx.pinacollada,
    dialogue: '(salamandr sees you)',
    encounters: [chr.salamandrCurious],
  },

  {
    if: ['wil?'],
    sfx: sfx.love,
    dialogue: '(salamandr sees you)',
    encounters: [chr.salamandrCurious],
  },

  {
    if: ['iftheygetshot'],
    dialogue: '(both die)',
    squad: [chr.englsWounded],
    encounters: [chr.salamandrDead],
  },
];
