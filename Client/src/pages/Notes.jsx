import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'
import Note from '../components/Note.jsx'
import CreateNote from '../components/CreateNote.jsx'
import notes from '../data/notes.js'



const Notes = () => {
const [createNote, setCreateNote] = useState(false)

const [newNotes, setNewNotes] = useState(notes)

function addNotes(note) {
   setNewNotes(prev => [note, ...prev])
}

function deleteNotes(id){
  setNewNotes(prev => prev.filter(note => note.id !== id))
}



  return (
    <div className='flex h-screen bg-black text-white'>
      <div className='hidden md:block md:w-64 border rounded border-gray-600 bg-black text-white'>
      <Sidebar/>
    </div>
    <div className=' h-screen w-full p-5'>
      <div className=' 'className={` flex h-2/10 md:h-1/10 lg:h-1/10 w-full bg-black border-green-500 text-white `} >
        <Welcome createNote={createNote} setCreateNote={setCreateNote}/>
           </div>
        <div className='h-8/10 w-full mt-[5%] overflow-y-auto'>
           <div className='flex h-1/2 gap-5 flex-2 flex-wrap w-full '>
          {newNotes.map((elem,idx)=>{
            return <Note key={idx} elem = {elem} deleteNotes = {deleteNotes}/>
          })}
        </div>
        </div>
       
    </div>
    <div  className={`${createNote?"w-0" : "w-full md:w-2/3 lg:w-2/3"} duration-300 overflow-y-hidden`}><CreateNote SetCreateNote = {setCreateNote} addNotes = {addNotes}/></div>
    </div>
  )
}

export default Notes