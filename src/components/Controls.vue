<template>
  <div class="controls" :style="getControlsStyle()">
    <div class="dialogue" :style="`color:${textColor}`">
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
      <a v-else class="next-btn" @click="click(null)" :style="`color:${textColor}`">NEXT</a>
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
    textColor() {
      return utils.textColor(this.$store.state.game.color);
    },
    choices() {
      return this.$store.state.game.choices;
    },
  },
  methods: {
    click(choiceIndex) {
      this.$store.commit('nextScreen', choiceIndex);
    },
    getControlsStyle() {
      const col = this.$store.state.game.color;
      return `background-color:rgb(${col.r}, ${col.g}, ${col.b})`;
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
}

@media only screen and (max-width: 1000px) {
  .controls {
    width: auto;
  }
}

.dialogue {
  padding: 5vh 3vw;
  height: 70vh;
}

.buttons {
  height: 30vh;
}

.next-btn {
  margin-top: 50px;
  padding: 10px;
  font-size: 2rem;

  border: none;
  outline: none;
  text-decoration: none;

  cursor: pointer;

  text-shadow: 0.5vh 0.5vh black;
}

.next-btn:active,
.next-btn:focus {
  text-shadow: none;
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
