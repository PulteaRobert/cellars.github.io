<template>
  <div class="controls">
    <p>
      {{ dialogue }}
    </p>
    <div class="choices" v-if="choices.length > 0">
      <button class="choice-btn" v-for="(choice, i) in choices" :key="choice.text" @click="$emit('next', i + 1)">
        {{ choice.text }}
      </button>
    </div>
    <div class="next" v-else>
      <button class="next-btn" @click="$emit('next')">
        NEXT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dialogue: String,
    choices: Array,
  },
};
</script>

<style scoped>

p {
  color: white;
}

.controls {
  width: 35vw;

  z-index: 100;
  padding: 2vh 2vw;

  background-color: brown;
}


@media only screen and (max-width: 1000px) {
  .controls {
    width: auto;
  }
}

</style>
