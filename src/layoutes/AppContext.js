import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleLoggedState = (name) => {
    changeUserName(name);
    setIsUserLogged((prevValue) => !prevValue);
  };
  const changeUserName = (name) => setUserName(name);

  return (
    <AppContext.Provider value={{ isUserLogged, toggleLoggedState, userName }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
