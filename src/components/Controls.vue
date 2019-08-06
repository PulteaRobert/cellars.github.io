<template>
  <div class="controls">
    <p>
      {{ getDialogue() }}
    </p>
    <button @click="$emit('next')">
      NEXT
    </button>
  </div>
</template>

<script>
export default {
  props: {
    dialogue: String,
    username: String,
  },
  methods: {
    getDialogue() {
      return this.dialogue.replace('$username', this.username);
    },
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
