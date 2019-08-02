<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import Game from './Game.vue';
import Menu from './Menu.vue';

export default {
  name: 'app',
  components: {
    Game,
    Menu,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "LCD Solid";
  src: url("./assets/fonts/LCD_Solid.ttf") format("ttf");
}

#app {
  font-family: "LCD Solid", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
