<template>
  <div class="controls">
    <div class="image">

    </div>
    <p>
      {{ dialogue }}
    </p>
    <button @click="$emit('beep')">
      beep
    </button>
    <button @click="$emit('boop');">
      boop
    </button>
    <button @click="$emit('remove')">
      BAAP
    </button>
  </div>
</template>

<script>
export default {
  props: {
    dialogue: String,
  }
};
</script>

<style scoped>
.image {
  
}

.controls {
  width: 35vw;

  z-index: 100;
  padding: 2vh 2vw;

  background-color: paleturquoise;
}


@media only screen and (max-width: 1000px) {
  .controls {
    width: auto;
  }
}

</style>
