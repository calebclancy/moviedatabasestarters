<template>
    <div>
        <h1>{{movie.title}}</h1>
        <p>{{id}}</p>
    </div>
</template>

<script> 
import axios from 'axios'
export default{
    name: "MovieDetail",
    data(){
        return{
            id:this.$route.params.id,
            movieobj: Object
        }
    },
    mounted()
    {
        const request = `https://api.themoviedb.org/3/movie/${this.id}?api_key=847ba04b320cb49734823ca6982994be&language=en-US`
        axios.get(request)
        .then((response) => {
            this.movieobj = response.data
        })
    }


}
</script>