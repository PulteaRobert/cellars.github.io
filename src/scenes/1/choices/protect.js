import chr from '@/assets/characters';
import sfx from '@/assets/sounds';

export default [
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
          'protecc23',
          {
            flag: 'protecc23',
          },
        ],
      },
      { text: 'grab a brush and put a little makeup', flags: 'protecc2' },
      { text: 'stop right there you criminal scum!', flags: 'protecc3' },
      { text: 'attacc', flags: 'protecc4' },
    ],
  },
  { // ** WORK IN PROGRESS DORESCT SALMANDER MORT SI ENGELS FARA MAINI IN AER MARCA UNTOLD
    if: ['protecc1', 'protecc1-succes'],
    encounters: [chr.salamandrDead],
    squad: [chr.engls],
    speaker: 'Narrator',
    dialogue: 'You lucky frog....',
  },
  {
    if: ['protecc1', '!protecc1-succes'],
    squad: [chr.englsWounded],
    sfx: sfx.gunshot,
  },
  {
    if: ['protecc1', '!protecc1-succes'],
    sfx: sfx.fool,
    dialogue: 'you fool. you absolute buffoon. you think you can challenge me in my own realm? you think you can rebel against my authority? you dare come into my house and upturn my dining chairs and spill coffee grounds in my Keurig? you thought you were safe in your chain mail armor behind that screen of yours. I will take these laminate wood floor boards and destroy you. I didn’t want war. but i didn’t start it.',
  },
];
