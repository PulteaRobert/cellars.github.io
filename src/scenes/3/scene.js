import utils from '@/utils';

import bgs from '@/assets/backgrounds';
import chr from '@/assets/characters';

export default [
  utils.sceneTransition(3),
  {
    squad: [chr.wiseBeka],
    speaker: 'Wise Beka',
    dialogue: 'Hello I am here to tell you that the game is not ready yet.',
  },
  {
    image: bgs.tyres,
    speaker: '',
    dialogue: '',
    color: utils.rgb(144, 66, 245),
    squad: [chr.engls],
    encounters: [],
  },
];
