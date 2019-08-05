<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Single+Day&display=swap');
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

  body {
    margin: 0;
    padding: 5vh 2.5vw;
    background-color: greenyellow;
  }

  #app {
    font-family: 'Press Start 2P', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
