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
};
</script>

<style>
.game {
  display: flex;
  flex-direction: row;

  height: 90vh;
  width: 100%;
}
</style>
