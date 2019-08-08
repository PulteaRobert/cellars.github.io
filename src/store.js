import Vue from 'vue';
import Vuex from 'vuex';

import utils from './utils';
import data from './data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index: 0,
    game: {
      squad: [],
      encounters: [],
      image: '',
      dialogue: '',
      speaker: '',
      choices: [],
      flags: [],
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
      }

      do {
        state.index += 1;
      } while (
        data[state.index].if !== undefined
        && !utils.includes(state.game.flags, data[state.index].if)
      );

      state.game = Object.assign(state.game, data[state.index]);
    },
    reloadScreen(state) {
      state.game = Object.assign(state.game, data[state.index]);
    },
  },
  actions: {},
});
