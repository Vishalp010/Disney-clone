import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white justify-between flex items-center gap-2 text-[17px] font-semibold cursor-pointer hover:underline underline-offset-8 ml-2 mr-2 mb-1 mt-4'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
