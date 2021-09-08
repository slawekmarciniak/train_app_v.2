import { Route, Switch } from "react-router-dom";
import {
  AddWorkout,
  EditWorkout,
  History,
  Home,
  Login,
  TrainingList,
} from "pages";

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
