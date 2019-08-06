<template>
  <div class="controls">
    <p>
      {{ dialogue }}
    </p>
    <button id="next" @click="$emit('next')">
      NEXT
    </button>
  </div>
</template>

<script>
export default {
  props: {
    dialogue: String,
  },
};
</script>

<style scoped>

p {
  color: white;
}

#next{
  position: fixed;
  left: 1250px;
  height: 50px;
  width: 150px;
  margin-top: 650px;
  margin-left: 125px;

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
