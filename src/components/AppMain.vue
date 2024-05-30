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
        <div class="row mx-5 py-3 ">
            <CardFilm v-for="movie in store.movies" :movie="movie" />
        </div>
    </div>

</template>

<style scoped>
.container-fluid {
    background-color: #434343;
}
</style>