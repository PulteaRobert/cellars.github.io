import farmer from './assets/char1.png';
import farmer2 from './assets/char2.png';
import dinosaur from './assets/char3.jpg';

import holland from './assets/bg1.png';

export default [
  {
    image: holland,
  },
  {
    squad: [farmer],
    dialogue: 'bro',
  },
  {
    squad: [dinosaur],
    encounters: [farmer2],
    dialogue: 'rarw',
  },
];
