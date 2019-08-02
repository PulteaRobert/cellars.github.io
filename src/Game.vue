<template>
  <div class="game">
    <div class="main">
      <Viewport />
      <Controls />
    </div>
    <div class="dialogue"></div>
  </div>
</template>

<script>
import Viewport from './components/Viewport.vue';
import Controls from './components/Controls.vue';

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

  height: 100vh;
  width: 100%;
}

.main {
  background-color: blanchedalmond;
  width: 70vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.dialogue {
  background-color: khaki;

  z-index: 100;

  width: 30vw;
}
</style>
