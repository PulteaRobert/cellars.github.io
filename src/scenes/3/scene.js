import utils from '@/utils';

import bgs from '@/assets/backgrounds';
import chr from '@/assets/characters';

export default [
  utils.sceneTransition(3),
  {
    image: bgs.tyres,
    speaker: '',
    dialogue: '',
    color: utils.rgb(144, 66, 245),
    squad: [chr.engls],
    encounters: [],
  },
];
