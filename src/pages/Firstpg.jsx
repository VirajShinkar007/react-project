import React from 'react'
import './Firstpg.css';
import { Link } from 'react-router-dom';
import popx from "../assets/popx.png";



const Firstpg = () => {
  return (
    

  


    <div className='container'>

      <div className='super'>
        <img id='ram' src={popx} alt="" />
      </div>
        <h1 className='h1mess'>
            Welcome to PopX
        </h1>
        <div className='rummess'>Welcome to our wesite what you think w <br /> Here everything is perfect</div>
        <Link to="/createacc"> 
          <button className='btn-1'>Create Account</button><br />
        </Link>
     
        <Link to='/login'>
        <button className='btn-2'>Already registerd? Login</button>
        </Link>
           
        

     
    </div>
  )
}

export default Firstpg
