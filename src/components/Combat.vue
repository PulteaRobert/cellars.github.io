<template>
  <div class="controls">
    <div class="image">

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
