<template>
  <div id="bg">
    <div>
      <h1 id="title">Cellars and Newts</h1>
      <router-link id="play-btn" class="btn" to="game">Play</router-link>
      <router-link id="credits-btn" class="btn" to="credits">©</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#title {
  font-size: 8vh;
  color: #68ff3a;
}

.btn {
  position: absolute;
  color: #fdba00;
  text-decoration: none;
  text-shadow: 1vh 1vh black;
}

.btn:hover {
  color: #c08d00;
}

.btn:focus,
.btn:active {
  color: #c08d00;
  text-shadow: 6px 6px black;
}

#play-btn {
  font-size: 10vh;

  transform: translate(-50%);

  bottom: 5vh;
}

#play-btn:active {
  transform: translate(-49%, 2%);
}

#credits-btn {
  font-size: 8vh;

  bottom: 5vh;
  right: 3vw;
}

#credits-btn {
  transform: translate(-49%, -2%);
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
