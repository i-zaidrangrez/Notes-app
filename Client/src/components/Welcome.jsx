import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Welcome = (props) => {
  return (
    <div className='flex place-content-between w-full p-2 flex-wrap '>
        <div className=''>
            <h1 className='text-2xl text-green-300 font-bold'>Welcome Back , John</h1>
            <p className='mt-[5%] text-gray-400'>Here Are Your Notes...</p>
        </div>
        <div>
            <button onClick={()=>{
              if(!props.createNote){
                props.setCreateNote(true);
              }else{
                props.setCreateNote(false)
              }
             }} className=' text-end flex items-center justify-center p-3 bg-green-300 text-black font-mono rounded-md mt-[3%]'><Plus color="black" />{props.createNote?"Create Note" : "Cancle"}</button>
        </div>
    </div>
  )
}

export default Welcome