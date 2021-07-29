import React, { createContext, useState, useReducer } from "react";
import DefaultTrainings from "../DataBase/DefaultTrainings";

export const AppContext = createContext();

const trainingReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.course];
    case "DELETE":
      console.log("delete");
      return state.filter((training) => training.id !== action.id);
    case "COMPLETE":
      let trainings = state;
      trainings.forEach((training) => {
        if (training.id === action.id) {
          training.finished = true;
          return;
        }
      });
      return [...trainings];
    default:
      throw new Error(`OOops something went wrong, action type ${action.type}`);
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trainingReducer, DefaultTrainings);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  console.log(state);

  const toggleLoggedState = (name) => {
    changeUserName(name);
    setIsUserLogged((prevValue) => !prevValue);
  };
  const changeUserName = (name) => setUserName(name);

  return (
    <AppContext.Provider
      value={{ isUserLogged, toggleLoggedState, userName, dispatch, state }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
