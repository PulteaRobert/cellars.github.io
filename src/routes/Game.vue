<template>
  <div class="game">
    <Viewport :image="state.image" :squad="state.squad" :encounters="state.encounters" />
    <Controls :dialogue="state.dialogue" :choices="state.choices" @next="next" />
  </div>
</template>

<script>
  import Viewport from '../components/Viewport.vue';
  import Controls from '../components/Controls.vue';

  import GameData from '../data';
  import { includes } from '../utils';

  export default {
    data() {
      return {
        index: -1,
        state: {
          squad: [],
          encounters: [],
          image: '',
          dialogue: '',
          choices: [],
          flags: [],
        },
      };
    },
    components: {
      Viewport,
      Controls,
    },
    methods: {
      next(choiceIndex) {
        if (choiceIndex) {
          const choice = this.$data.state.choices[choiceIndex - 1];

          if (choice.flag instanceof Array) {
            /* eslint-disable */
            for (const flag of choice.flag) {
              this.$data.state.flags.push(flag);
            }
            /* eslint-enable */
          }

          if (typeof choice.flag === 'string') {
            this.$data.state.flags.push(choice.flag);
          }

          this.$data.state.choices.length = 0;
        }

        while (true) {
          this.$data.index += 1;

          if (GameData[this.$data.index].if == undefined || includes(this.$data.state.flags, GameData[this.$data.index].if)) {
            this.$data.state = Object.assign(this.$data.state, GameData[this.$data.index]);
            return;
          }
        }
      },
    },
    mounted() {
      this.next();
    },
  };
</script>

<style>
  .game {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  @media only screen and (max-width: 1000px) {
    .game {
      flex-direction: column;
    }
  }
</style>