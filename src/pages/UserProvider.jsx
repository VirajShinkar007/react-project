import React, { useState } from 'react';
import { UserContext } from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
