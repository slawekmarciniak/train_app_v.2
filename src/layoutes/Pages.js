import { Route, Switch } from "react-router-dom";
import AddWorkout from "../pages/AddWorkout";
import EditWorkout from "../pages/EditWorkout";
import History from "../pages/History";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TrainingList from "../pages/TrainingList";

import "../styles/Pages.css";

const Pages = () => {
  return (
    <div className="pagesContainer">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/add_workout" exact render={() => <AddWorkout />} />
        <Route path="/edit_workout" exact render={() => <EditWorkout />} />
        <Route path="/training_list" exact render={() => <TrainingList />} />
        <Route path="/history" exact render={() => <History />} />
        <Route path="/login" exact render={() => <Login />} />
      </Switch>
    </div>
  );
};

export default Pages;
