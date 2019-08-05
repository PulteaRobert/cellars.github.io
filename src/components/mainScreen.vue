<template>
    <div class="imageContainer" >
        <img class="image" src="../assets/backgroundImage.png" alt=""> 
            <div class="view">
                <div class="textTab">
                    <div class="names">
                    </div>
                    <div class="conversation1">
                    </div>
                    <div class="conversation2">
                    </div>
                </div>
                <div class="storyTab">
                </div>
                <div class="decisionTab">
                    <div class="row1">
                        <div class="decisionA"></div>
                        <div class="decisionB"></div>
                    </div>
                    <div class="row2">
                        <div class="decisionC"></div>
                        <div class="decisionD"></div>
                    </div>
                </div>
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

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    margin: 0;
}

.textTab{
    position: fixed;
    background-color: coral;
    width: 40%;
    height: 100%;
    right: 0;  
    min-width: 4em;
}

.storyTab{
    position:fixed;
    background-color: azure;
    width:60%;
    height:100%;
    top: 0;
}

.decisionTab{
    position: fixed;
    background-color: chartreuse;
    width:40%;
    height: 30%;
    bottom: 0;
    right: 0;
}

.image{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit:cover;
    margin:0;
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

.imageContainer{
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

.row1{
    width: 100%;
    height: 50%;
    display: flex;
}

.row2{
    width: 100%;
    height: 50%;
    display: flex;
}

.decisionA{
    width: 50%;
    height: 100%;
    background-color: black;
}

.decisionB{
    width: 50%;
    height: 100%;
    background-color: yellow;
}

.decisionC{
    width: 50%;
    height: 100%;
    background-color: brown;
}

.decisionD{
    width: 50%;
    height: 100%;
    background-color: chartreuse;
}

.names{
    width: 100%;
    height: 10%;
    background-color: crimson;
    z-index: 4;
}

.conversation1{
    position: fixed;
    right: 0;
    height: 70%;
    width: 20%;
    background-color: cornflowerblue;
}

.conversation2{
    z-index: -1;
    position: fixed;
    top: 0;
    height: 70%;
    width: 20%;
    background-color: darkgoldenrod
}

</style>
