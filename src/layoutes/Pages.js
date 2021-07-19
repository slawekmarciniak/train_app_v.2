import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AddWorkout from "../pages/AddWorkout";
import TrainingList from "../pages/TrainingList";
import Training from "../Components/Training";
import History from "../pages/History";
import "../styles/Pages.css";

const defaultTrainings = [
  {
    id: 0,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  },
  {
    id: 1,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  },
  {
    id: 2,
    type: "running",
    description: "easy run - enjoy workout",
    date: new Date().toISOString().slice(0, 10),
    duration: 30,
    importand: true,
    finished: false,
  },
  {
    id: 3,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  },
  {
    id: 4,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  },
  {
    id: 5,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  },
  {
    id: 6,
    type: "running",
    description: "easy run",
    date: "2021-08-20",
    duration: 100,
    importand: true,
    finished: false,
  },
];
const Pages = () => {
  const [trainingsList, setTrainingsList] = useState(defaultTrainings);
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
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Pages;
