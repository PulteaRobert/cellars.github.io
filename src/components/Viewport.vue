<template>
  <div class="image">
    <img :src="image" class="background" @click="addCharacter" />

    <div class="characters">

      <transition-group tag="div" enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft flipped">
        <img v-for="(character, index) in characters" :key="character" :src="getCharacterSrc(character)"
          :style="getCharacterStyle(index)" class="character" />
      </transition-group>

      <transition-group tag="div" enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight">
        <img v-for="(encounter, index) in encounters" :key="encounter" :src="getCharacterSrc(encounter)"
          :style="getCharacterStyle(index, true)" class="character" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { GameState, GameData } from '../main';

const offset = 7.5;

export default {
  data() {
    return {
      image: GameData.images[GameState.image],
      characters: GameState.encounters,
      encounters: GameState.characters,
    };
  },
  methods: {
    getCharacterSrc(index) {
      return GameData.characters[index];
    },

    // FIXME
    getCharacterStyle(index, encounter = false) {
      return `${encounter ? 'right' : 'left'}:${(encounter ? 30 : 0)
          + index * offset}vw;z-index:${Math.floor(90 / (index + 1))}`;
    },
    addCharacter() {
      this.characters.push(0);
    },
  },
};
</script>

<style scoped>

  .image {
    width: 100%;
    height: 100%;

    background-color: black;
  }

  .background {
    width: 100%;
    height: 100%;
  }

  .characters {
    position: absolute;
    overflow: hidden;

    width: 64vw;
    height: 80vh;
    bottom: 5vh;
  }

  .character {
    position: absolute;

    width: 20vw;
    height: 70vh;

    bottom: 0;
    overflow: hidden;
  }
</style>
