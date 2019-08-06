<template></template>
<script>
export default {
  data() {
    return {
      hero: {
        HP: 100,
        maxHP: 100,
        attack: 30
      },
      enemy: {
        HP: 100,
        maxHP: 100,
        attack: 30
      }
    };
    methods: {
      attack: () => {
        this.$data.enemy.HP -= this.$data.hero.attack;
        console.log(this.$data.enemy.HP);
      };
    }
  }
};
</script>
<style>
</style>

