<script>
import store from '../data/store.js';
import axios from 'axios'


export default {
  data() {
    return {
      store

    }
  },
  methods: {
    // chiamo film in base alla ricerca in input
    findMovies() {
      // variabile booleana utilizzata per far comparire l'h2 film solo quando questa è vera
      store.isMovie = true
      // azzero la lista di movie in caso in cui fosse già stata fatta una chiamata in precedenza
      store.movies = {}
      // assegno al parametro query dell'api il valore dell'input
      store.requestListMovie.params.query = store.inputArea

      axios
        .request(store.requestListMovie)
        .then(function (response) {
          //  i film con il valore "en" su original_language le trasformo in "gb-eng",sennò non mi vengono riconosciute dal link per le bandiere
          response.data.results.forEach(element => {
            if (element.original_language == "en") {
              element.original_language = "gb-eng";
            } else if (element.original_language == "ja") {
              element.original_language = "jp";
            }
          });
          // pusho i film
          store.movies = response.data.results
          // controllo se la lista è vuota o meno
          if (store.movies.length > 0) {
            store.isMovie = true;
          } else {
            store.isMovie = false;
          }
          console.log(store.movies)
        })
        .catch(function (error) {
          console.error(error);
        });
    },


    findTv() {
      store.isSeries = true
      store.tvSeries = {}
      store.requestListTv.params.query = store.inputArea

      axios
        .request(store.requestListTv)
        .then(function (response) {
          response.data.results.forEach(element => {
            if (element.original_language == "en") {
              element.original_language = "gb-eng";
            } else if (element.original_language == "ja") {
              element.original_language = "jp";
            }
          });
          store.tvSeries = response.data.results
          if (store.tvSeries.length > 0) {
            store.isSeries = true;
          } else {
            store.isSeries = false;
          }
          console.log(store.tvSeries)

        })
        .catch(function (error) {
          console.error(error);
        });
    },


    find() {
      this.findMovies(),
        this.findTv()
    }


  },
  mouthed() { }
}
</script>

<template>
  <header>
    <div class="container-fluid bg-dark">
      <div class="row d-flex align-items-center">
        <div class="col-2 d-flex justify-content-center">
          <h1 class="text-danger m-0 p-1">BOOLFLIX</h1>
        </div>
        <div class="offset-7 col-3 d-flex justify-content-center">
          <input type="text" placeholder="Cerca film/serie" class="form-control w-50" v-model="store.inputArea">
          <button class="btn btn-light ms-2" @click="find()">CERCA</button>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped></style>
