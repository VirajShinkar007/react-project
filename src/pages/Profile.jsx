import React, { useContext } from "react";
import "./Profile.css";
import profileImg from "../assets/profile.jpg";
import { UserContext } from "../context/UserContext";


const Profile = () => {
  const {userData} =useContext(UserContext);


  return (
    <div className="account">
      <h1>Account Setting</h1>

      <div className="profile-section">
        <div className="profile-img">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="profileIngo">
          <h4>{userData?.fullName}</h4>
          <p className="email">userData?.email</p>
        </div>
      </div>

      <div className="right">
        <p>phone: {userData?.phone}</p>
        <p>Company : {userData?.company}</p>
        <p>Agency :{userData?. Agency}</p>
      </div>

      
    </div>
  );
};

export default Profile;
