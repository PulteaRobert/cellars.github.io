<template>
  <div id="bg">
    <div>
      <h1 id="menu">Cellars and Newts</h1>
      <router-link id="play-btn" to="/game">Play</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#menu {
  font-size: 8vh;
  color: #68ff3a;
}

#play-btn {
  font-size: 10vh;
  color: #fdba00;
  text-decoration: none;
  position: absolute;
  bottom: 5vh;
  transform: translate(-50%);
  text-shadow: 1vh 1vh black;
}

#play-btn:hover {
  color: #c08d00;
}

#play-btn:focus,
#play-btn:active {
  color: #c08d00;
  text-shadow: 6px 6px black;
  transform: translate(-49%, 2%);
}

#bg {
  background-image: url("../assets/swamp.png");
  background-size: cover;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
