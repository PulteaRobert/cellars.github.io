<template>
  <div class="controls" :style="getStyle()">
    <h2>Lorem</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
      possimus voluptates deleniti assumenda cumque aperiam recusandae. Delectus
      ut quam, illum voluptas quae rerum tenetur temporibus! Unde deserunt repellendus
      exercitationem at.
    </p>
  </div>
</template>

<script>
import { GameData, GameState } from '../main';

export default {
  methods: {
    getStyle() {
      return `background-image:url(${
        GameData.backgrounds[GameState.background]
      });`;
    },
  },
};
</script>

<style scoped>
.controls {
  height: 35vh;
  z-index: 100;
  padding: 2vh 2vw;
}

h2 {
  color: white;
}

p {
  color: white;
  font-family: "LCD Solid";
  font-size: 1.5rem;
}
</style>
