import React, { Component } from "react";
import TrainingsList from "./TrainingsList";
import AddTraining from "./AddTraining";
import "./App.css";

class App extends Component {
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
      <div className="container">
        <AddTraining />
        <hr />
        <TrainingsList
          list={this.state.trainings}
          complete={this.handleCompleteButton}
          delete={this.handleDeleteButton}
        />
        <hr />
      </div>
    );
  }
}

export default App;
