import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Welcome = () => {
  return (
    <div className='flex place-content-between w-full p-2 flex-wrap '>
        <div className=''>
            <h1 className='text-2xl text-blue-500 font-bold'>Welcome Back , John</h1>
            <p className='mt-[5%] text-gray-400'>Here Are Your Notes...</p>
        </div>
        <div>
            <button className=' text-end flex items-center justify-center p-3 bg-blue-600 text-white font-mono rounded-md mt-[3%]'><Plus color="white" />Create Note</button>
        </div>
    </div>
  )
}

export default Welcome