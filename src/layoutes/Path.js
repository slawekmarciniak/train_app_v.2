import { Route } from "react-router-dom";
import "../styles/Path.css";
const Path = () => {
  return (
    <div>
      <Route path="/train_app_v.1/" exact render={() => <p>home</p>} />
      <Route
        path="/train_app_v.1/:page"
        exact
        render={(props) => (
          <p>
            home {">"} {props.match.params.page}
          </p>
        )}
      />
    </div>
  );

  // <Route render={() => <p>path</p>} />
  // <Route render={() => <p>path</p>} />
  // <Route render={() => <p>path</p>} />
  // <Route render={() => <p>path</p>} />
};

export default Path;
