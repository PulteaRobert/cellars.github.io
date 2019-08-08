import charMrEngls from '@/assets/mr.engls.png';

import sfxRun from '@/assets/sound/RUN.mp3';
import sfxGunshot from '@/assets/sound/gunshot.mp3';

export default [
  {
    if: ['run'],
    speaker: 'Mr. Engls',
    dialogue: 'I shall run away from my problems',
    sfx: sfxRun,
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
    squad: [charMrEngls],
    encounters: [],
    speaker: 'Mr. Engls',
    dialogue: "Phew... look's like I lost him... I can see the settlement already",
  },
  {
    if: ['run', 'run-success'],
    squad: [],
    dialogue: '',
    speaker: '',
  },
  {
    if: ['run', '!run-success'],
    sfx: 'stop',
    speaker: 'Salmandr',
    dialogue: 'Like you can run away from a gun dumbass...',
  },
  {
    if: ['run', '!run-success'],
    sfx: sfxGunshot,
    speaker: 'Salmandr',
    dialogue: "I'll take you to my secret base",
  },
];
