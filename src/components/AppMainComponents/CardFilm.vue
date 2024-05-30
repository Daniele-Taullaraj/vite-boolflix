<script>
export default {
    props: {
        movie: Object
    },
    data() {
        return {
        }
    },
    methods: {
    },
    mouthed() {
    }
}



</script>

<template>
    <div class="col-2 p-2 my-2">
        <div class="card bg-dark border border-2 text-white position-relative">

            <div class="img-card w-100 h-100 position-relative z-2">
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt=""
                    class="w-100 h-100 rounded">
            </div>

            <div class="p-2 h-100 rounded position-absolute z-1">
                <div>
                    <span class="fw-bold">Titolo: </span>
                    <span>{{ movie.title }}</span>
                </div>

                <div>
                    <span class="fw-bold">Titolo originale: </span>
                    <span>{{ movie.original_title }}</span>
                </div>

                <div>
                    <span class="fw-bold">Lingua: </span>
                    <span>{{ movie.original_language }}</span>
                </div>

                <div>
                    <span class="fw-bold">Voto: </span>
                    <span>{{ movie.vote_average }} </span>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card {
    height: 20rem;
}

.img-card:hover {
    display: none;
}
</style>