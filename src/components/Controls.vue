<template>
  <div class="controls" :style="getControlsStyle()">
    <div class="dialogue" :style="`color:${textColor}`">
      <h1>{{ speaker }}</h1>
      <p>{{ dialogue }}</p>
    </div>
    <div class="buttons">
      <div class="choices" v-if="choices.length > 0">
        <a
          class="choice-btn"
          v-for="(choice, i) in choices"
          :key="choice.text"
          :style="`color:${textColor}`"
          @click.prevent="click(i)"
        >&gt;&nbsp;{{ choice.text }}</a>
      </div>
      <a v-else class="next-btn" @click.prevent="click(null)" :style="`color:${textColor}`">NEXT</a>
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

.dialogue {
  flex-grow: 4;
  padding: 5vh 3vw;
}

.buttons {
  padding: 5vh 3vw;
}

.next-btn {
  margin-top: 50px;
  padding: 10px;
  font-size: 5vh;

  border: none;
  outline: none;
  text-decoration: none;

  cursor: pointer;

  text-shadow: 0.5vh 0.5vh black;
}

.next-btn:active,
.next-btn:focus {
  position: relative;
  margin-left: 1vh;
  bottom: -1vh;
  text-shadow: none;
}

.choices {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-items: center;
}

.choice-btn {
  font-size: 3vh;
  cursor: pointer;
  margin-top: 4vh;
  text-shadow: 0.5vh 0.5vh black;
}

.choice-btn:hover {
  letter-spacing: -1px;
}

.choice-btn:active,
.choice-btn:focus {
  transform: translate(1vh, 1vh);
  text-shadow: none;
}

@media (max-aspect-ratio: 11/7) {
  .controls {
    width: auto;
  }
}

@media (max-aspect-ratio: 6/7) {
  .controls {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 70vh;
  }

  .dialogue {
    flex-grow: 1;
  }
}

@media (min-aspect-ratio: 6/7) and (max-aspect-ratio: 11/7) {
  .controls {
    height: 45vh;
    flex-direction: row;
  }
  .dialogue {
    flex-grow: 2;
  }

  .choices {
    margin-top: 0;
  }
}
</style>
