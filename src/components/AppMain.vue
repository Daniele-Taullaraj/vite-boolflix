<script>
import CardFilm from './AppMainComponents/CardFilm.vue';
import store from '../data/store.js';

export default {
    components: {
        CardFilm,
    },
    data() {
        return {
            store
        }
    },
    methods: {},
    mouthed() { }
}
</script>

<template>
    <div class="container-fluid ">
        <div class="row mx-5 py-3 text-white">
            <h2 v-if="store.isMovie" class="m-0 p-1 text-center bg-dark">FILM</h2>
            <CardFilm v-for="movie in store.movies" :movie="movie" />
            <h2 v-if="store.isSeries" class="m-0 p-1 text-center bg-dark">SERIE TV</h2>
            <CardFilm v-for="serie in store.tvSeries" :movie="serie" />
        </div>
    </div>

</template>

<style scoped>
.container-fluid {
    background-color: #434343;
}
</style>