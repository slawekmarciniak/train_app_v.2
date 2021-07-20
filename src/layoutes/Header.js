import { Route, Switch } from "react-router-dom";
import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";
import header4 from "../images/header4.jpg";
import header5 from "../images/header5.jpg";
import header6 from "../images/header6.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <Switch>
        <Route
          path="/train_app_v.1/"
          exact
          render={() => <img src={header6} alt="sport"></img>}
        />

        <Route
          path="/train_app_v.1/add_workout"
          render={() => <img src={header3} alt="sport"></img>}
        />
        <Route
          path="/train_app_v.1/training_list"
          render={() => <img src={header4} alt="sport"></img>}
        />
        <Route
          path="/train_app_v.1/history"
          render={() => <img src={header5} alt="sport"></img>}
        />
        <Route
          path="/train_app_v.1/contact"
          render={() => <img src={header1} alt="sport"></img>}
        />
        <Route
          path="/train_app_v.1/admin"
          render={() => <img src={header2} alt="sport"></img>}
        />
      </Switch>
    </>
  );
};

export default Header;
