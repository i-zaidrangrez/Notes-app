import { Star } from 'lucide-react'
import React from 'react'

const Note = (props) => {
  return (
    <div className='h-full w-full md:w-[45%] lg:w-[30%] border border-gray-300 rounded p-2 flex flex-col place-content-between'>
        <div className=''>
            <h1 className='text-2xl text-green-300 font-bold'>{props.elem.title}</h1>
            <p className='mt-[5%] text-lg'>{props.elem.content}</p>
        </div>
        <div className='flex w-full place-content-between p-2'>
            <p>{props.elem.createdAt}</p>
            <p className='flex items-center justify-center gap-1'><Star color="yellow" />{props.elem.favorite ? "Favorite" : "Unfavorive"}</p>
        </div>
        
    </div>
  )
}

export default Note