<template>
    <div class="backgroundContainer" >
        <!-- <img class="image" src="../assets/backgroundImage.png" alt="">  -->
            <div class="view">
                
               <menu2></menu2>

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
import menu2 from './menu2.vue';

export default {
  name: 'viewmen',
  components: {
    conversationScreen,
    menu2,
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
    width: 100%;
    height: 100%;
    background-color: rgb(190, 181, 181);
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
