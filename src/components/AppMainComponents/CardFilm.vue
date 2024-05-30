<script>
export default {
    name: "CardFilm",
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

            <!-- <div class="img-card w-100 h-100 position-relative z-2">
                <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : 'https://picsum.photos/300/300'"
                    alt="" class="w-100 h-100 rounded">
            </div> -->

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
                    <span class="me-2">{{ movie.original_language }}</span>
                    <img :src="`https://flagcdn.com/16x12/${movie.original_language}.png`" alt="">

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