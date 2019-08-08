import sadviolin from '@/assets/sound/sadv.mp3';

export default [
  {
    if: ['distract'],
    speaker: '',
    dialogue: '',
    sfx: sadviolin,
  },
  {
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
];
