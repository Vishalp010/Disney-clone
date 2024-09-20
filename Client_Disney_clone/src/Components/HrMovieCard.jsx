import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function HrMovieCard({movie}) {
  return (
   <div className='ease-in-out cursor-pointer hover:scale-105 transition-all  duration-200 hover:border-white ' >
   <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="" className=' w-[110px]  md:w-[260px] hover:border-[2px] border-solid rounded-lg  ' />
   <h2 className='w-[110px]  md:w-[260px] text-white font-semibold font-sans p-2 ' >{movie.title}</h2>
 </div>
  )
}

export default HrMovieCard
