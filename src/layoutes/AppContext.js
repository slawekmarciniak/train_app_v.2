import React, { createContext, useState, useReducer } from "react";

import DefaultTrainings from "../DataBase/DefaultTrainings";

export const AppContext = createContext();

const trainingReducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      let trainingsList = state.filter(
        (training) => training.id !== action.value.id
      );
      return [...trainingsList, action.value];
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
  const [editingWorkout, setEditingWorkout] = useState("");

  const handleEditButton = (id) => {
    let training = state.filter((training) => training.id === id);
    setEditingWorkout(training[0]);
  };

  const toggleLoggedState = (name) => {
    changeUserName(name);
    setIsUserLogged((prevValue) => !prevValue);
  };
  const changeUserName = (name) => setUserName(name);

  return (
    <AppContext.Provider
      value={{
        isUserLogged,
        toggleLoggedState,
        userName,
        dispatch,
        state,
        handleEditButton,
        editingWorkout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
