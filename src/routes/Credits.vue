<template>
  <div id="bg" class="fullscreen">
    <div id="overlay" class="fullscreen"></div>
    <div class="text">
      <h1 id="title">Credits</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tenetur ad magni mollitia nulla fuga officia eos odio natus eum quos laborum,
        illum maiores veniam id! Rem illum adipisci aspernatur velit!
      </p>
    </div>
    <router-link id="back-btn" class="btn" to="/">Back</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text {
  position: relative;
  z-index: 2;
  padding: 0 20vw;
}

p {
  margin-top: 10vh;
  color: white;
  font-size: 2vh;
}

#title {
  font-size: 8vh;
  color: rgb(138, 0, 236);
}

.fullscreen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#bg {
  background-image: url("../assets/backgrounds/bgSwamp.png");
  background-size: cover;
  background-repeat: no-repeat;
}

#overlay {
  background-color: #00000085;
}
.btn {
  position: absolute;
  color: rgb(14, 164, 212);
  text-decoration: none;
  text-shadow: 1vh 1vh black;
}

.btn:hover {
  color: rgb(12, 127, 165);
}

.btn:focus,
.btn:active {
  text-shadow: 6px 6px black;
}

#back-btn {
  font-size: 7.5vh;

  transform: translate(-50%);

  bottom: 5vh;
}

#back-btn:active {
  transform: translate(-49%, 2%);
}
</style>
