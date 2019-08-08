<template>
  <div class="controls">
    <div class="dialogue">
      <h1>{{ speaker }}</h1>
      <p>{{ dialogue }}</p>
    </div>
    <div class="buttons">
      <div class="choices" v-if="choices.length > 0">
        <button
          class="choice-btn"
          v-for="(choice, i) in choices"
          :key="choice.text"
          @click="click(i)"
        >{{ choice.text }}</button>
      </div>
      <button v-else class="next-btn" @click="click(null)">NEXT</button>
    </div>
  </div>
</template>

<script>
import utils from '../utils';

export default {
  computed: {
    speaker() {
      return this.$store.state.game.speaker;
    },
    dialogue() {
      return this.$store.state.game.dialogue;
    },
    choices() {
      return this.$store.state.game.choices;
    },
  },
  methods: {
    click(choiceIndex) {
      utils.playSound('../assets/sound/test.mp3');
      this.$store.commit('nextScreen', choiceIndex);
    },
  },
};
</script>

<style scoped>
.controls {
  width: 35vw;

  z-index: 100;

  display: flex;
  flex-direction: column;

  background-color: brown;
}

@media only screen and (max-width: 1000px) {
  .controls {
    width: auto;
  }
}

.dialogue {
  color: white;

  height: 70vh;
  background-color: yellowgreen;
}

.buttons {
  height: 30vh;
  background-color: yellow;
}

.next-btn {
  margin-top: 50px;
  padding: 10px;
  font-size: 2rem;
}

.choices {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
}

.choice-btn {
  font-size: 1.5rem;
}
</style>
