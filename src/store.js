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
      if (choiceIndex !== null) {
        const choice = state.game.choices[choiceIndex];

        if (choice.flag instanceof Array) {
          /* eslint-disable */
          for (const flag of choice.flag) {
            state.game.flags.push(flag);
          }
          /* eslint-enable */
        }

        if (typeof choice.flag === 'string') {
          state.game.flags.push(choice.flag);
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
  actions: {

  },
});
