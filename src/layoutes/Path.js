import { Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext } from "react";

import "../styles/Path.css";

const Path = () => {
  const { isUserLogged } = useContext(AppContext);
  const { userName } = useContext(AppContext);

  const welcomeIfLogged = isUserLogged && (
    <span className="login">
      welcome: <span className="user">{userName}</span>{" "}
    </span>
  );

  return (
    <div className="path">
      <Route path="/" exact render={() => <p>home</p>} />
      <Route
        path="/:page"
        exact
        render={(props) => (
          <p>
            home {userName} {">"} {props.match.params.page}
          </p>
        )}
      />
      {welcomeIfLogged}
    </div>
  );
};

export default Path;
