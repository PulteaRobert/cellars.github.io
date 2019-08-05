<template>
  <div class="game">
      <Viewport :image="image" :characters="char" :encounters="enc" />
      <Controls :dialogue="dialogue" @beep="beep" @boop="boop" @remove="baap"/>
  </div>
</template>

<script>
import Viewport from '../components/Viewport.vue';
import Controls from '../components/Controls.vue';

import image1 from '../assets/bg1.png';
import char1 from '../assets/char1.png';
import char2 from '../assets/char3.jpg';

export default {
  data() {
    return {
      char: [],
      enc: [],
      image: image1,
      dialogue: "",
    };
  },
  components: {
    Viewport,
    Controls,
  },
  methods: {
    beep() {
      this.char.push(char1);
    },
    boop() {
      this.enc.push(char2);
      this.dialogue = "Ce qui la baise que tu viens de dire putain de moi, petite salope? Je vais devoir vous le savez je suis diplômé en haut de ma classe dans la Commandement des Opérations Spéciales, et j'ai été impliqué dans de nombreux raids secrets sur Front de Libération Nationale d’Algérie, et j'ai plus de 300 tués confirmés. Je suis formé dans la guerre des gorilles et je suis le meilleur tireur d'élite dans les forces armées américaines entières. Tu ne es rien pour moi, mais juste une autre cible. Je vais vous essuyez la baise avec précision les goûts de ce qui n'a jamais été vu avant sur cette Terre, marquer mes mots putains. Vous pensez que vous pouvez en tirer en disant que la merde pour moi sur l'Internet? Détrompez-vous, baiseur. Comme nous parlons Je contacte mon réseau secret d'espions à travers la France et votre IP est tracée dès maintenant afin de mieux vous préparer à la tempête, mouche. La tempête qui efface la petite chose pathétique vous appelez votre vie. Tu baises morts, gamin. Je peux être ne importe où, ne importe quand, et je peux vous tuer plus de sept cent façons, et ce est seulement avec mes mains nues. Non seulement je suis beaucoup entraîné au combat sans armes, mais je avoir accès à tout l'arsenal de la Légion Étrangère et je vais l'utiliser à sa pleine mesure pour essuyer le cul misérable de la surface du continent, petite merde. Si seulement vous pouviez avez connu ce châtiment impie votre petit commentaire \"intelligent\" était sur le point de faire tomber sur vous, peut-être vous auriez tenu ta putain de langue. Mais vous ne pouviez pas, vous ne avez pas, et maintenant vous payez le prix, vous putain idiot. Je vais chier fureur sur vous et vous noyer en elle. Tu baises morts, gamin."
    },
    baap() {
      this.enc.pop();
      this.char.pop();
      this.dialogue = "";
    },
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
