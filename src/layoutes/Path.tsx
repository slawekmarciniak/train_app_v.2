import * as React from 'react';
import { FC } from 'react';

import { Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext } from "react";

import Hej from "./Hej";

const Path: FC = () => {
  const { isUserLogged } = useContext(AppContext);
  const { userName } = useContext(AppContext);

  const welcomeIfLogged = isUserLogged && (
    <span className="login">
      <span>user:</span> <span className="user">{userName}</span>
    </span>
  );

  return (
    <div className="path">
      <Hej></Hej>
      <Route
        path="/"
        exact
        render={() => <div className="pathName">home</div>}
      />
      <Route
        path="/:page"
        exact
        render={(props) => (
          <div className="pathName">
            home {">"} {props.match.params.page}
          </div>
        )}
      />
      {welcomeIfLogged}
    </div>
  );
};

export default Path;
