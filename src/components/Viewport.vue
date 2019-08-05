<template>
  <div class="viewport">
    <img :src="image" class="image" />

    <div class="characters">

      <transition-group tag="div" enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft flipped">
        <img v-for="(src, index) in characters" :key="src" :src="src"
          :style="getCharacterStyle(index)" class="character" />
      </transition-group>

      <transition-group tag="div" enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight">
        <img v-for="(src, index) in encounters" :key="src" :src="src"
          :style="getCharacterStyle(index, true)" class="character" />
      </transition-group>
    </div>
  </div>
</template>

<script>
const offset = 7.5;

export default {
  props: {
    image: String,
    characters: Array,
    encounters: Array,
  },
  methods: {
    // DONT TOUCH THIS PLEASE
    // I FORGOT HOW THIS WORKS
    getCharacterStyle(index, encounter = false) {
      return `${encounter ? 'right' : 'left'}:${index * offset}vw;z-index:${Math.floor(90 / (index + 1))}`;
    },
  },
};
</script>

<style scoped>

  .viewport {
    width: 65vw;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .characters {
    position: absolute;
    overflow: hidden;

    width: 100%;
    height: 100%;

    bottom: 0;
  }

  .character {
    position: absolute;

    width: 20vw;
    height: 70vh;

    bottom: 0;
  }
</style>
