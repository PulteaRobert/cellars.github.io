<template>
  <div class="game">
      <Viewport :image="state.image" :squad="state.squad" :encounters="state.encounters" />
      <Controls :dialogue="state.dialogue" :username="username" @next="next"/>
  </div>
</template>

<script>
import Viewport from '../components/Viewport.vue';
import Controls from '../components/Controls.vue';

import GameData from '../data';
import { getSave, setSave } from '../save';

export default {
  data: getSave,
  components: {
    Viewport,
    Controls,
  },
  methods: {
    next() {
      this.$data.index += 1;
      this.$data.state = Object.assign(this.$data.state, GameData[this.$data.index]);
      setSave(this.$data);
    },
  },
  created() {
    this.$data.username = this.$route.params.username;
  },
  mounted() {
    this.$data.state = Object.assign(this.$data.state, GameData[this.$data.index]);
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
