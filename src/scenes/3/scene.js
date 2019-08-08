import utils from '@/utils';

import bgSettlement from '@/assets/tiredtyres.gif';

import charMrEngls from '@/assets/engls.hands.down.png';

export default [
  utils.sceneTransition(3),
  {
    image: bgSettlement,
    speaker: '',
    dialogue: '',
    color: utils.rgb(144, 66, 245),
    squad: [charMrEngls],
    encounters: [],
  },
];
