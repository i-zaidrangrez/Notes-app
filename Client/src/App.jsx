import React from 'react'
import Login from './pages/Login.jsx'
import {Routes , Route} from 'react-router-dom'
import Notes from './pages/Notes.jsx'
import Register from './pages/Register.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/login' element = {<Login/>} />
      <Route path='/notes' element = {<Notes/>} />
      <Route path='/register' element = {<Register/>} />
    </Routes>
    </>
  )
}

export default App