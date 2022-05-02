<template>
    <div>
        <h1>Upcoming Movies</h1>
        <div v-for="movie in movies" :key=movie.id>
        {{movie.title}}
        </div>
      
    </div>
</template>

<script>
import axios from "axios"
export default{
    name:"MoviesDb",
    data(){
        return{
            movies: []
        }
    },
    mounted(){
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=847ba04b320cb49734823ca6982994be&language=en-US&page=3")
        .then((response)=>{
            this.movies = response.data.results;
            console.log(this.movies)
        })
    }
}
</script>
