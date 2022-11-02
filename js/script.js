// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Utilizzare almeno una classe CSS in modo dinamico
// Bonus:
// 1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// 2. Cambiare dinamicamente l’immagine
// 3. Al click di un bottone nascondere l’immagine e mostrare un testo

const { createApp } = Vue;

createApp({

  data(){
    return {
      firstMessage: "Questo è il mio primo esercizio con Vue",
      styleClasse: '',
      imageName: 'img/vue-logo.png',
      text: "Dov'è andata l'immagine?",
      isTextShow: false,
      imageShow: true,
    }
  },

  methods: {
    dynamicStyle(style){
      console.log('cambio stile')
      this.styleClasse = style;
    },

    changeImage(newImageName){
      this.imageName = newImageName
    },

    showText(showText, showImage){
      this.isTextShow = showText;
      this.imageShow = showImage;
    }
  }

}).mount('#app')