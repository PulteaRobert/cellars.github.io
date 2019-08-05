<template>
  <div class="game">
      <Viewport :image="image" :characters="char" :encounters="enc" />
      <Controls @beep="beep" @boop="boop"/>
  </div>
</template>

<script>
import Viewport from '../components/Viewport.vue';
import Controls from '../components/Controls.vue';

import image1 from '../assets/image1.jpg';
import char1 from '../assets/character1.png';
import enc1 from '../assets/character2.png';

export default {
  data() {
    return {
      char: [],
      enc: [],
      image: image1,
    };
  },
  components: {
    Viewport,
    Controls,
  },
  methods: {
    beep() {
      this.char.push(char1);
    },
    boop() {
      this.enc.push(enc1);
    },
  },
};
</script>

<style>
.game {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
