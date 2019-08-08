import utils from '@/utils';

import bgWayToLab from '@/assets/wayToLab.jpg';

import charMrEnglsWounded from '@/assets/wounded.engls.png';
import charSalamandr from '@/assets/pistolar.salmendr.png';

export default [
  {
    scene: '2',
    image: bgWayToLab,
    speaker: '',
    dialogue: '',
    color: utils.rgb(166, 166, 166),
    squad: [charMrEnglsWounded],
    encounters: [charSalamandr],
  },
  utils.sceneTransition('SCENE III'),
];
