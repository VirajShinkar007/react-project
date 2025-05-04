import React from 'react'
import './App.css'
import { Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import Firstpg from './pages/Firstpg'
import Second from './pages/Second'
import Createacc from './pages/Createacc'
import Profile from './pages/Profile'
import Clicklogin from './pages/Clicklogin'




function App() {
  

  return (
  //  <Router>
    <Routes>
      <Route path="/" element={<Firstpg/>} />
      <Route path="/login" element={<Second/>} />
      <Route path="/createacc" element={<Createacc/>}/>
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/clicklogin" element={<Clicklogin/>}/>

    </Routes>
  //  </Router>

  )
}

export default App
