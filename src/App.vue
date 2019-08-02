<template>
  <div id="app">
    <div class="main">
      <Viewport />
      <Controls />
    </div>
  </div>
</template>

<script>
import Viewport from "./components/Viewport.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "app",
  components: {
    Viewport,
    Controls
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: row;

  height: 100vh;
  width: 100%;
}

.main {
  background-color: blanchedalmond;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.75vh;
}
</style>
