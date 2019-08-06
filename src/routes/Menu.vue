<template>
  <div id="menu">
    <h1>GAME</h1>
    <input
      class="input"
      id="myInput"
      type="text"
      v-model="username"
      placeholder="Name"
      maxlength="15"
    />
    <button class="input" id="ent" @click="play">PLAY</button>
  </div>
</template>
<script>
// let input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("ent").click();
//   }
// }); foloseste vue retard
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    play() {
      this.$router.push({
        name: "game",
        params: { username: this.$data.username }
      });
    }
  }
};
</script>

<style scoped>
#menu {
  font-size: 3rem;
}
.input {
  font-family: "Press Start 2P";
  width: 300px;
  font-size: 50px;
}
</style>
