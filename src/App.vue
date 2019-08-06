<template>
  <div id="app">
<<<<<<< Updated upstream
    <router-view></router-view>
=======
    <mainScreen />
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
export default {
  name: 'app',
=======
import mainScreen from "./components/mainScreen.vue";

export default {
  name: "app",
  components: {
    mainScreen
  },
  data: function() {
    return { msg: "msg" };
  },
  methods: {
    changeMsg(val) {
      this.msg = val;
    }
  }
>>>>>>> Stashed changes
};
</script>

<style>
<<<<<<< Updated upstream
  @import url('https://fonts.googleapis.com/css?family=Single+Day&display=swap');
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Press Start 2P', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
=======
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
>>>>>>> Stashed changes
</style>
