import mrEngls from './assets/MrEngls.png';
import bg from './assets/scene1.gif';
import pistolar from './assets/pistolar.png';
import sax from './assets/sound/SaxSeal.mp3';

export default [
  {
    image: bg,
    color: 'rgb(138, 0, 236)',
  },
  {
    squad: [mrEngls],
    speaker: 'Mr Engls',
    dialogue: 'No god, pliz no!',
    sfx: sax,
  },
  {
    encounters: [pistolar],
    speaker: 'Pistolar',
    dialogue: 'heeh',
    sfx: 'stop',
  },
  {
    choices:[
      
    ]
  },
];
