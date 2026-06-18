import React, { useState } from 'react'
import api from '../services/api'

const CreateNote = (props) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    async function handleSubmit(e){
        e.preventDefault()
        const Note = {
            title,
            content
        }
        
        const newNote = await api.post('/note/createnote',{
            title,
            content
        })
        props.setNewNotes(prev => [newNote.data.note, ...prev])
        
        setTitle("")
        setContent("")
    }

  return ( 
    <div className=' h-screen  p-5 flex place-content-center flex-col gap-5'>
        <h1 className='p-4 text-3xl font-bold '>Create New Note</h1>
        <form className=' flex flex-col w-full gap-4 p-4 h-1/2 items-center' onSubmit={(e)=>{handleSubmit(e)}}>
            <input value={title} type="text" placeholder='Add Title' onChange={(e)=>{
                setTitle(e.target.value)
            }} className='w-full p-3 outline-0 border rounded border-gray-400  ' />
            <textarea value={content} onChange={(e)=>{
                setContent(e.target.value)
            }} placeholder='More Details' className='w-full h-3/4 p-4 outline-0 border rounded border-gray-400 '></textarea>
            <button className='bg-green-300 text-black w-1/2 p-2 rounded' onClick={()=>{props.SetCreateNote(true)}}>Create Note</button>
        </form>
        
    </div>
  )
}

export default CreateNote