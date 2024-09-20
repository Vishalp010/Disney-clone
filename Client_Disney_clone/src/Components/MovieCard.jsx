import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function MovieCard({movie}) {
  return (
    <>
      <img src={IMAGE_BASE_URL + movie.poster_path} alt="" className=' w-[110px]  md:w-[220px] hover:border-white rounded-lg hover:scale-110 transition-all duration-200 hover:border-[2px] border-solid ease-in-out cursor-pointer      ' />
    </>
  );
}

export default MovieCard
