<template>
  <div class="controls">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Commodi doloribus tenetur nulla nemo molestias quo aliquam placeat.
        Delectus atque obcaecati sit consequatur. Harum sint rem expedita ducimus,
         animi voluptatibus amet.</p>
    <button @click="$emit('beep')">
      beep
    </button>
    <button @click="$emit('boop')">
      boop
    </button>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.controls {
  width: 45vw;

  z-index: 100;
  padding: 2vh 2vw;

  background-color: paleturquoise;
}
</style>
