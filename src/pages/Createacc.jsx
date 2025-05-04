import React, { useContext, useState } from 'react'
import './createacc.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext";
const Createacc = () => {

    const {setUserData}=useContext(UserContext);
    const navigate= useNavigate();
   


    const [formData,setFormData]=useState({
        fullName:'',
        phone:'',
        email:'',
        password:'',
        company:'',
        Agency:'',
    });

    const handleChange = (e) =>{
        const {name,vlaue,type} = e.target;
        const val = type === 'radio' ? vlaue:e.target.value;
        setFormData({...formData,[name]:val});
    }
    const handleSubmit = () =>{
        setUserData(formData)
        navigate('/Profile')
    }
  return (
    <div className='style'>
        <h1>Create Your <br /> PopX Account</h1>
      
        <div className='heading ff'>
            <label htmlFor="">Full Name</label>
            <input type="text" name="fullName" placeholder='' onChange={handleChange}/>
        </div>

        <div className='heading gg'>
            <label htmlFor="">Phone Number</label>
            <input type="text" name='phone' placeholder='' onChange={handleChange}/>
        </div>

        <div className='heading'>
            <label htmlFor="">Email Address</label>
            <input type="email" name='email' placeholder='' onChange={handleChange}/>
        </div>

        <div className='heading'>
            <label htmlFor="">Password</label>
            <input type="password" name='password' placeholder='' onChange={handleChange}/>
        </div>

        <div className='heading'>
            <label htmlFor="">Company name</label>
            <input type="text" name='company' placeholder=' ' onChange={handleChange}/>
        </div>


        <div className='heading1'>
            <label htmlFor="">Are You an agency?</label>
            <label htmlFor="">
                <div> <input type="radio" name='Agency'  onChange={handleChange}/>
                Yes</div>
               
            </label>

            <label htmlFor="">
                <div><input type="radio" name='Agency'   onChange={handleChange}/>
                No</div>
                
            </label>
        </div>

        <Link to='/Profile'>      
        <button onClick={handleSubmit}>Create account</button>
        </Link>

  
    </div>
  )
}

export default Createacc
