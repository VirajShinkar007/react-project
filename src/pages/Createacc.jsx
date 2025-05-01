import React from 'react'
import './createacc.css'
import { Link } from 'react-router-dom'

const Createacc = () => {
  return (
    <div className='style'>
        <h1>Create Your <br /> PopX Account</h1>
      
        <div className='heading ff'>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder=''/>
        </div>

        <div className='heading gg'>
            <label htmlFor="">Phone Number</label>
            <input type="text" placeholder=''/>
        </div>

        <div className='heading'>
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder=''/>
        </div>

        <div className='heading'>
            <label htmlFor="">Password</label>
            <input type="password" placeholder=''/>
        </div>

        <div className='heading'>
            <label htmlFor="">Company name</label>
            <input type="text" placeholder=''/>
        </div>


        <div className='heading1'>
            <label htmlFor="">Are You an agency?</label>
            <label htmlFor="">
                <div> <input type="radio" name='agency' value='yes'/>
                Yes</div>
               
            </label>

            <label htmlFor="">
                <div><input type="radio" name='agency' value='yes' />
                No</div>
                
            </label>
        </div>

        <Link to='/Profile'>      
        <button>Create account</button>
        </Link>

  
    </div>
  )
}

export default Createacc
