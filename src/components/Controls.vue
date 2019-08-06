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
          @click="$emit('next', i + 1)"
        >{{ choice.text }}</button>
      </div>
      <button v-else class="next-btn" @click="$emit('next')">NEXT</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dialogue: String,
    choices: Array,
    speaker: String,
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
  background-color: crimson;
}

.buttons {
  height: 30vh;
  background-color: blue;
}

.next-btn {
  margin-top: 50px;
  padding: 10px;
  font-size: 2rem;
}
</style>
