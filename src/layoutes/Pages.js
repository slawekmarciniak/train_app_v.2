import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import AddWorkout from "../pages/AddWorkout";
import DefaultTrainings from "../DataBase/DefaultTrainings";
import History from "../pages/History";
import Home from "../pages/Home";
import TrainingList from "../pages/TrainingList";

import "../styles/Pages.css";

const Pages = () => {
  const [trainingsList, setTrainingsList] = useState(DefaultTrainings);
  let idNumber = 10;

  const addTraining = (training) => {
    const { type, description, date, minutes, hours, important } = training;
    const newTraining = {
      id: idNumber,
      type,
      description,
      date,
      duration: `${hours} h : ${minutes} m`,
      important,
      finished: false,
    };

    setTrainingsList((prevState) => [...prevState, newTraining]);

    idNumber++;
    return true;
  };

  const handleCompleteButton = (id) => {
    let trainings = trainingsList;
    trainings.forEach((training) => {
      if (training.id === id) {
        training.finished = true;
        return;
      }
    });
    setTrainingsList([...trainings]);
  };

  const handleDeleteButton = (id) => {
    let trainings = trainingsList;
    trainings = trainings.filter((training) => training.id !== id);
    setTrainingsList([...trainings]);
  };

  const handleEditButton = (id) => console.log(id);

  return (
    <div className="pagesContainer">
      <Switch>
        <Route
          path="/train_app_v.1/"
          exact
          render={() => (
            <Home
              list={trainingsList}
              complete={handleCompleteButton}
              delete={handleDeleteButton}
              edit={handleEditButton}
            />
          )}
        />

        <Route
          path="/train_app_v.1/add_workout"
          exact
          render={() => <AddWorkout addNewTraining={addTraining} />}
        />
        <Route
          path="/train_app_v.1/training_list"
          exact
          render={() => (
            <TrainingList
              list={trainingsList}
              complete={handleCompleteButton}
              delete={handleDeleteButton}
              edit={handleEditButton}
            />
          )}
        />

        <Route
          path="/train_app_v.1/history"
          exact
          render={() => (
            <History
              list={trainingsList}
              complete={handleCompleteButton}
              delete={handleDeleteButton}
              edit={handleEditButton}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Pages;
