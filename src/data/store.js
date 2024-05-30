
import { reactive } from 'vue';

const iMieiDati = reactive({

    inputArea: "",
    isMovie: false,
    isSeries: false,
    movies: {},
    tvSeries: {},

    requestListMovie: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            query: "",
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmEzMThiNjU2OTFhZjQ1NzEzZGQwNmJjMTFiZTM3ZCIsInN1YiI6IjY2NTgyYTJhZGFiNzdjY2E0ZTFkMjJiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZJDBn_K7_CwTkUK9lt_a2BVuYDRuK3F9g2uR474yjF0'
        }
    },

    requestListTv: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/tv',
        params: {
            query: "",
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmEzMThiNjU2OTFhZjQ1NzEzZGQwNmJjMTFiZTM3ZCIsInN1YiI6IjY2NTgyYTJhZGFiNzdjY2E0ZTFkMjJiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZJDBn_K7_CwTkUK9lt_a2BVuYDRuK3F9g2uR474yjF0'
        }
    },

});

export default iMieiDati;