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
  background-color: #28023c;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

@media only screen and (max-width: 1000px) {
  .game {
    flex-direction: column;
  }
}
</style>
