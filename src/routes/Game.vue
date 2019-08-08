<template>
  <div class="game">
    <Viewport />
    <Controls />
  </div>
</template>

<script>
import Viewport from '../components/Viewport.vue';
import Controls from '../components/Controls.vue';

export default {
  components: {
    Viewport,
    Controls,
  },
  mounted() {
    this.$store.commit('reloadScreen');
  },
};
</script>

<style>
.game {
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  background-color: black;
}

@media (max-aspect-ratio: 11/7) {
  .game {
    flex-direction: column;
  }
}
</style>
