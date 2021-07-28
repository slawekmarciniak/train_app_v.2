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
          path="/"
          exact
          render={() => <img src={header6} alt="sport"></img>}
        />

        <Route
          path="/add_workout"
          render={() => <img src={header3} alt="sport"></img>}
        />
        <Route
          path="/training_list"
          render={() => <img src={header4} alt="sport"></img>}
        />
        <Route
          path="/history"
          render={() => <img src={header5} alt="sport"></img>}
        />
        <Route
          path="/contact"
          render={() => <img src={header1} alt="sport"></img>}
        />
        <Route
          path="/admin"
          render={() => <img src={header2} alt="sport"></img>}
        />

        <Route
          path="/edit_workout"
          render={() => <img src={header2} alt="sport"></img>}
        />

        <Route
          path="/login"
          render={() => <img src={header2} alt="sport"></img>}
        />
      </Switch>
    </>
  );
};

export default Header;
