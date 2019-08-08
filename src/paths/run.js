import mrEngls from '../assets/mr.engls.png';

export default [
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
    dialogue: '',
    speaker: '',
  },
];
