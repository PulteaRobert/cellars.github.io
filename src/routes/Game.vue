<template>
  <div class="game">
    <Viewport @die="showControls = true" />
    <transition name="controls-animation" enter-active-class="animated slideInRight">
      <Controls v-if="showControls" />
    </transition>
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
  data() {
    return {
      showControls: true,
    };
  },
};
</script>

<style>
.game {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  height: 100vh;

  background-color: black;
}

@media only screen and (max-width: 1000px) {
  .game {
    flex-direction: column;
  }
}
</style>
