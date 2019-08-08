import chr from '@/assets/characters';
import sfx from '@/assets/sounds';

export default [
  {
    if: ['run'],
    speaker: 'Mr. Engls',
    dialogue: 'I shall run away from my problems',
    sfx: sfx.run,
  },
  {
    if: ['run', 'run-success'],
    sfx: 'stop',
    squad: [],
    speaker: 'Salmandr',
    dialogue: "He's so damn fast",
  },
  {
    if: ['run', 'run-success'],
    squad: [chr.englsCornered],
    encounters: [],
    speaker: 'Mr. Engls',
    dialogue: "Phew... look's like I lost him... I can see the settlement already",
  },
  {
    if: ['run', 'run-success'],
    squad: [],
    dialogue: '',
    speaker: '',
    jumpto: '3',
  },
  {
    if: ['run', '!run-success'],
    sfx: 'stop',
    speaker: 'Salmandr',
    dialogue: 'Like you can run away from a gun dumbass...',
  },
  {
    if: ['run', '!run-success'],
    sfx: sfx.gunshot,
    squad: [chr.englsWounded],
  },
  {
    if: ['run', '!run-success'],
    speaker: 'Salmandr',
    dialogue: "I'll take you to my secret base",
    jumpto: '2',
  },
];
