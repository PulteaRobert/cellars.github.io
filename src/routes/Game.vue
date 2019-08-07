<template>
  <div class="bg">
    <ThoughtsViewport v-if="thoughts" />
    <div class="game" v-else>
      <Viewport />
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <Controls />
      </transition>
    </div>
  </div>
</template>

<script>
import Viewport from '../components/Viewport.vue';
import ThoughtsViewport from '../components/ThoughtsViewport.vue';
import Controls from '../components/Controls.vue';

export default {
  components: {
    Viewport,
    Controls,
    ThoughtsViewport,
  },
  mounted() {
    this.$store.commit('reloadScreen');
  },
  computed: {
    thoughts() {
      return this.$store.state.game.thoughts;
    },
  },
};
</script>

<style>
.bg {
  background-color: #28023c;
  height: 100vh;

  text-align: center;
  text-align: -webkit-center;
}

.game {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

@media only screen and (max-width: 1000px) {
  .game {
    flex-direction: column;
  }
}
</style>
