<template>
    <div class="backgroundContainer" >
        <img class="image" src="../assets/backgroundImage.png" alt=""> 
            <div class="view">

                <conversationScreen />

            </div>
            <div class="ctrlMenue">
                <div class="soundIcon">
                </div>

                <div class="restartIcon">
                </div>
            </div>
        </div>
</template>

<script>

import conversationScreen from './conversationScreen.vue';

export default {
  name: 'view',
  components: {
    conversationScreen
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    margin: 0;
}

.view{
    margin: 0;
    position: fixed;
    background-color: blue;
    width: 95%;
    height: 83%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0%);
    top: 5%;
}

.backgroundContainer{
    position: fixed;
    top: 0%;
    right: 0%;
    bottom: 0;
    margin: 0;
}

.soundIcon{
    position: fixed;
    /* background-image: url("../assets/soundIcon.png"); */
    height: 42px;
    width:100px;
    bottom: 3%;
    right: 6%;
    object-fit: contain;
}

.restartIcon{
    position: fixed;
    /* background-image: url("../assets/restartIcon.png"); */
    height: 39px;
    width:114px;
    bottom: 3%;
    right: 14%;
    object-fit: contain;
}
</style>
