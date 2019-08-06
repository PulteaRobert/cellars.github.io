<template>
  <div id="menu">
    <h1>GAME</h1>
    <input class="input" type="text" v-model="username" placeholder="Name" maxlength="15" />
    <button class="input" @click="play">PLAY</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    play() {
      this.$router.push({
        name: 'game',
        params: { username: this.$data.username },
      });
    },
  },
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
