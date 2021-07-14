import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import AddWorkout from "../pages/AddWorkout";
import TrainingList from "../pages/TrainingList";
import Training from "../Components/Training";

class Pages extends Component {
  idNumber = 10;

  state = {
    trainings: [
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
        description: "easy run",
        date: "2021-08-20",
        duration: 100,
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
    ],
  };

  addTraining = (training) => {
    const { type, description, date, minutes, hours, important } = training;
    const newTraining = {
      id: this.idNumber,
      type,
      description,
      date,
      duration: `${hours} h : ${minutes} m`,
      important,
      finished: false,
    };

    this.setState((prevState) => ({
      trainings: [...prevState.trainings, newTraining],
    }));

    this.idNumber++;
    return true;
  };

  handleCompleteButton = (id) => {
    let trainings = this.state.trainings;
    trainings.forEach((training) => {
      if (training.id === id) {
        training.finished = true;
        return;
      }
    });
    this.setState({
      trainings,
    });
  };

  handleDeleteButton = (id) => {
    let trainings = this.state.trainings;
    trainings = trainings.filter((training) => training.id !== id);
    this.setState({
      trainings,
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/train_app_v.1/"
            exact
            render={() => (
              <TrainingList
                list={this.state.trainings}
                complete={this.handleCompleteButton}
                delete={this.handleDeleteButton}
              />
            )}
          />

          <Route
            path="/train_app_v.1/add_workout"
            exact
            render={() => <AddWorkout addTraining={this.addTraining} />}
          />
          <Route
            path="/train_app_v.1/training_list"
            exact
            render={() => (
              <TrainingList
                list={this.state.trainings}
                complete={this.handleCompleteButton}
                delete={this.handleDeleteButton}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Pages;
