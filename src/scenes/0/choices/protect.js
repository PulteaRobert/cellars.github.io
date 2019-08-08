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
