import React, { createContext, useState, useReducer } from "react";
import DefaultTrainings from "../DataBase/DefaultTrainings";

export const AppContext = createContext();

const trainingReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.course];
    case "REMOVE":
      return state.filter((el) => el.id !== action.id);
    case "FETCH":
      return action.data;
    case "DELETE":
      console.log("delete");
      return state.filter((training) => training.id !== action.id);
    default:
      throw new Error(`OOops something went wrong action type ${action.type}`);
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

  // const handleDeleteButton = (id) => {
  //   let trainings = trainingsList;
  //   trainings = trainings.filter((training) => training.id !== id);
  //   setTrainingsList([...trainings]);
  // };

  return (
    <AppContext.Provider
      value={{ isUserLogged, toggleLoggedState, userName, dispatch, state }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
