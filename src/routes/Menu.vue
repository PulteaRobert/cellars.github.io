<template>
    <div id="menu">
        <h1>GAME</h1>
        <input class="input" type="text" v-model="username" maxlength="15" />
        <button @click="play">PLAY</button>    
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
        }
    },
    methods: {
        play() {
            this.$router.push({name: 'game', params: { username: this.$data.username }});
        }
    }
};
</script>

<style scoped>
#menu {
    font-size: 3rem;
}
</style>
