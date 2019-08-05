<template>
  <div class="game">
      <Viewport :image="state.image" :squad="state.squad" :encounters="state.encounters" />
      <Controls :dialogue="state.dialogue" @next="next"/>
  </div>
</template>

<script>
import Viewport from '../components/Viewport.vue';
import Controls from '../components/Controls.vue';

import GameData from '../data';

export default {
  data() {
    return {
      index: -1,
      state: {
        squad: [],
        encounters: [],
        image: "",
        dialogue: "",
      }
    };
  },
  components: {
    Viewport,
    Controls,
  },
  methods: {
    next() {
      this.$data.state = Object.assign(this.$data.state, GameData[++this.$data.index]);
    }
  },
};
</script>

<style>

.game {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

@media only screen and (max-width: 1000px) {
  .game {
    flex-direction: column;
  }
}

</style>
