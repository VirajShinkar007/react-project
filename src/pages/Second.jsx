import React from "react";
import './Second.css'
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="containerA">
      <h1>
        Signin to your <br />
        PopX account
      </h1>

      <div className="lorem">
        Lorem ipsum dolor sit amet consectetur  <br />
        what are you doing here start first
      </div>

      <div className="button1">
        <label htmlFor="email" >Email Address</label>
        <input type="email" id="email" placeholder="Enter you email here" />
      </div>

      <div className="button2">
        <label htmlFor="password" >Password</label>
        <input type="password" id="email" placeholder="Enter you password here" />
      </div>
      
    <Link to="/clicklogin">
     <button>Login</button>
     </Link>
     
    </div>

    
  );
};

export default Second;
