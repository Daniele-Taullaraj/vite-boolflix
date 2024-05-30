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

            <div class="img-card w-100 h-100 position-relative z-2">
                <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/original' + movie.poster_path : 'https://picsum.photos/300/300'"
                    alt="" class="w-100 h-100 rounded">
            </div>

            <div class="p-2 h-100 rounded position-absolute z-1 overflow-auto">
                <div>
                    <span class="fw-bold text-danger">Titolo: </span>
                    <span>{{ movie.title }}</span>
                </div>

                <div>
                    <span class="fw-bold text-danger">Titolo originale: </span>
                    <span>{{ movie.original_title }}</span>
                </div>

                <div>
                    <span class="fw-bold text-danger">Lingua: </span>
                    <span class="me-2">{{ movie.original_language }}</span>
                    <img :src="`https://flagcdn.com/16x12/${movie.original_language}.png`" alt="">

                </div>

                <div>
                    <span class="fw-bold text-danger">Voto: </span>
                    <span class="me-2">{{ movie.vote_average }} </span>
                    <i v-for="star in movie.vote_average" class="fa-solid fa-star text-warning"></i>
                </div>

                <div>
                    <span class="fw-bold text-danger">Overview: </span>
                    <span class="me-2">{{ movie.overview }} </span>
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