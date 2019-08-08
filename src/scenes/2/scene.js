import utils from '@/utils';

import bgs from '@/assets/backgrounds';
import chr from '@/assets/characters';

export default [
  utils.sceneTransition(2),
  {
    image: bgs.sewers,
    speaker: '',
    dialogue: '',
    color: utils.rgb(166, 166, 166),
    squad: [chr.englsWounded],
    encounters: [chr.salamandr],
  },
];
