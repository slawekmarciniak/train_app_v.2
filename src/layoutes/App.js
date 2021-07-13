import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import TrainingsList from "../Components/TrainingsList";
// import AddTraining from "../Components/AddTraining";

import Header from "./Header";
import Path from "./Path";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import "../styles/App.css";

class App extends Component {
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
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <section className="path">
            <Path />
          </section>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>

          {/* <AddTraining addTraining={this.addTraining} /> */}

          {/* <TrainingsList
          list={this.state.trainings}
          complete={this.handleCompleteButton}
          delete={this.handleDeleteButton}
        /> */}
        </div>
      </Router>
    );
  }
}

export default App;

/* <AddTraining addTraining={this.addTraining} /> */

/* <TrainingsList
          list={this.state.trainings}
          complete={this.handleCompleteButton}
          delete={this.handleDeleteButton}
        /> */