import chr from '@/assets/characters';
import sfx from '@/assets/sounds';

export default [
  {
    if: ['protecc'],
    choices: [
      {
        text: 'grab a sharp stone and aim at the head',
        flags: [
          'protect1',
          {
            flag: 'protect1-success',
            chance: 0.5,
          },
        ],
      },
      {
        text: 'grab a brush and put a little makeup',
        flags: ['protect2', 'protect23'],
      },
      {
        text: 'yell "Stop right there you criminal scum!"',
        flags: ['protect3', 'protect23'],
      },
    ],
  },
  {
    if: ['protect1', 'protect1-success'],
    encounters: [chr.salamandrDead],
    squad: [chr.engls],
    speaker: '',
    dialogue: 'You lucky frog..',
    sfx: sfx.villagerDeath,
    jumpto: '3',
  },
  {
    if: ['protect1', '!protect1-success'],
    choices: [],
    squad: [chr.englsWounded],
    sfx: sfx.gunshot,
  },
  {
    if: ['protect1', '!protect1-success'],
    sfx: sfx.fool,
    dialogue:
      'you fool. you absolute buffoon. you think you can challenge me in my own realm? you think you can rebel against my authority? you dare come into my house and upturn my dining chairs and spill coffee grounds in my Keurig? you thought you were safe in your chain mail armor behind that screen of yours. I will take these laminate wood floor boards and destroy you. I didn’t want war. but i didn’t start it.',
    jumpto: '2',
  },
  {
    if: ['protect2'],
    speaker: '',
    dialogue: '....',
  },
  {
    if: ['protect2'],
    speaker: '',
    dialogue: '......',
  },

  {
    if: ['protect2'],
    speaker: '',
    dialogue: 'You put on makeup.',
    sfx: sfx.makeUp,
  },
  {
    if: ['protect3'],
    sfx: sfx.criminal,
    speaker: 'You',
    dialogue: 'Stop right there you criminal scum!',
  },
  {
    if: ['protect23'],
    sfx: sfx.Criminal,
    speaker: '',
    squad: [chr.englsPrisoner],
    dialogue: 'Your foolish attempt led to one thing... Being imprisoned',
    jumpto: '2',
  },
];
