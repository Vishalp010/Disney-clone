import React, { useEffect,useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
// import { response } from 'express'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2';
const screenWidth = window.innerWidth;

export default function Slider() {
   const [movieList,setMovieList] = useState([]);
   const elementRef = useRef();
   useEffect(()=>{
      getTrendingMovies();
   }, [])
   const getTrendingMovies= ()=>{
      GlobalApi.getTrendingVideos.then((resp)=>{
         console.log(resp.data.results);
         setMovieList(resp.data.results);
      })
      .catch((error)=>{
         console.error('Error fetching trending movies:', error);
      });
   };

   const sliderRight =(element)=>{
      element.scrollLeft +=screenWidth-10
   }
   const sliderLeft =(element)=>{
      element.scrollLeft -=screenWidth-10
   }

  return (
   <div>
      <HiChevronLeft className= 'hidden md:block  text-white text-[30px] absolute mx-2 mt-[190px] cursor-pointer' 
      onClick={()=>sliderLeft(elementRef.current)}/>
       <HiChevronRight className='hidden md:block   text-white text-[30px] absolute mx-2 mt-[190px] cursor-pointer right-0 '
       onClick={()=>sliderRight(elementRef.current)} />

    <div className='flex overflow-x-auto w-full px-10 py-5 scrollbar-hide scroll-smooth ' ref={elementRef}>
      {movieList.map((item)=>(
         <img 
         src={IMAGE_BASE_URL+item.backdrop_path} 
         className='hover:border-[2px] min-w-full md:h-[350px]  object-cover object-left-top mr-5 rounded-lg transition-all duration-100 ' 
         alt="" />
      ))}
    </div>
    </div>
  )
}
