import React from 'react'
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-Geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
   const productionHouseList = [
      { id: 1, image: disney, video: disneyV },
      { id: 2, image: pixar, video: pixarV },
      { id: 3, image: marvel, video: marvelV },
      { id: 4, image: starwar, video: starwarV },
      { id: 5, image: nationalG, video: nationalGeographicV },
    ];

  return (
    <div className='flex md:gap-5 p-2 px-5 ' >
      {productionHouseList.map((item)=>(
         <div className='relative border-[2px] border-gray-600 hover:border-[2px]   hover:border-white rounded-lg tansition-all duration-300 hover:scale-110 ease-in-out overflow-hidden cursor-pointer shadow-xl shadow-gray-600'>
            <video src={item.video} autoPlay loop muted  playsInline className=' absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0 opacity-0 hover:opacity-60 '  />
            <img src={item.image} alt="" className='  w-full h-full z-[1] opacity  object-cover opacity-100 hover:opacity-70 ' />
         </div>
      ))}
    </div>
  )
}

export default ProductionHouse
