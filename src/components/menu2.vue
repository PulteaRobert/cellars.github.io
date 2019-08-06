<template>
    <div class="mainScreen">
        <div class="glitchyImage">
            <img class="image" src="../assets/glitchyImage.gif" alt=""> 
        </div>
        <form>
            <div class="playText">
                <input type="submit" value="Play" class="btn">
            </div>
        </form>
    </div>
</template>

<script>

export default {
  name: 'menu2',
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

.mainScreen{
    width: 100%;
    height: 100%;
}

.glitchyImage{ 
    width: 100%;
    height: 100%;
}

.image{
    width: 100%;
    height: 100%;
    object-fit:cover;
}

.btn{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    font-family: 'Press Start 2P', cursive;
    color: rgb(190, 181, 181);
    font-size: 44px;
}

</style>
