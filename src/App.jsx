import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Firstpg from './pages/Firstpg'
import Second from './pages/Second'
import Createacc from './pages/Createacc'
import Profile from './pages/Profile'



function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Firstpg/>} />
      <Route path="/login" element={<Second/>} />
      <Route path="/createacc" element={<Createacc/>}/>
      <Route path="/Profile" element={<Profile/>} />

    </Routes>
   </Router>

  )
}

export default App
