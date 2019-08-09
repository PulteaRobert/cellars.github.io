import Vue from 'vue';
import Vuex from 'vuex';

import utils from './utils';
import data from './data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index: 0,
    game: {
      scene: '',
      squad: [],
      encounters: [],
      image: '',
      dialogue: '',
      speaker: '',
      choices: [],
      flags: [],
      color: '',
      sfx: null,
      jumpto: null,
    },
  },
  mutations: {
    nextScreen(state, choiceIndex) {
      if (state.index === data.length - 1) {
        return;
      }

      if (choiceIndex !== null) {
        const choice = state.game.choices[choiceIndex];

        if (choice.flags instanceof Array) {
          /* eslint-disable */
          for (const flag of choice.flags) {
            if (typeof flag === 'string') {
              state.game.flags.push(flag);
            } else if (typeof flag === 'object') {
              if (Math.random() < flag.chance) {
                state.game.flags.push(flag.flag);
              }
            }
          }
          /* eslint-enable */
        }

        if (typeof choice.flags === 'string') {
          state.game.flags.push(choice.flags);
        }

        state.game.choices.length = 0;
        state.game.speaker = '';
        state.game.dialogue = '';
      }

      if (state.game.jumpto) {
        do {
          state.index += 1;
        } while (data[state.index].scene !== state.game.jumpto);
        state.game.jumpto = null;
      } else {
        do {
          state.index += 1;
        } while (
          data[state.index].if !== undefined
          && !utils.includes(state.game.flags, data[state.index].if)
        );
      }

      state.game.sfx = null;
      state.game = Object.assign(state.game, data[state.index]);
      utils.playSound(state.game.sfx);
    },
    reloadScreen(state) {
      state.game = Object.assign(state.game, data[state.index]);
      utils.playSound(state.game.sfx);
    },
  },
  actions: {},
});
