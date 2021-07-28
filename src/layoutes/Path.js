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
      <Route path="/train_app_v.1/" exact render={() => <p>home</p>} />
      <Route
        path="/train_app_v.1/:page"
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

  // <Route render={() => <p>path</p>} />
  // <Route render={() => <p>path</p>} />
  // <Route render={() => <p>path</p>} />
  // <Route render={() => <p>path</p>} />
};

export default Path;
