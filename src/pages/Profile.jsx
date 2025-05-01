import React from "react";
import "./Profile.css";
import profileImg from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="account">
      <h1>Account Setting</h1>

      <div className="profile-section">
        <div className="profile-img">
          <img src={profileImg} alt="" />
        </div>
        <div className="profileIngo">
          <h4>Marry doe</h4>
          <p className="email">marrydow@123.com</p>
        </div>
      </div>

      <div className="right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quas
        molestiae vitae praesentium eius illum quod a, quibusdam explicabo
        nulla, quis, nostrum quaerat dolore.
      </div>
    </div>
  );
};

export default Profile;
