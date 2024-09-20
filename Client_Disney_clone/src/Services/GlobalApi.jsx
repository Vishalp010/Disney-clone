import axios from 'axios';

const movieBasedUrl = 'https://api.themoviedb.org/3'
const api_key = '9c47654c65aecc681b177df06a6ddbd7'

const movieByGenreBaseURL=`${movieBasedUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideos = axios.get(`${movieBasedUrl}/trending/all/day?api_key=${api_key}`);

   const getMovieByGenreId = (id)=> axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default{
   getTrendingVideos,
   getMovieByGenreId,
}