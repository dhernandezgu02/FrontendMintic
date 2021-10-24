import React, { useState } from "react";
import "./App.css";
import routes from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/user-slice";

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  const { isLogged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(userActions.setValue({ key: "isLogged", value: false }));
  };
  return (
    <div>
      {isLogged && <button onClick={logouthandler}>Cerrar Sesion </button>}
      <Router>
        <div className="App">
          {!isLogged && (
            <Switch>
              {routes.not_logged.map((route) => (
                <Route
                  key={route.url}
                  path={route.url}
                  component={route.Component}
                  exact={true}
                />
              ))}
              <Route path="*">
                <Redirect to="/Login" />
              </Route>
            </Switch>
          )}
          {isLogged && (
            <Switch>
              {routes.logged.map((route) => (
                <Route
                  key={route.url}
                  path={route.url}
                  component={route.Component}
                  exact={true}
                />
              ))}
              <Route path="*">
                <Redirect to="/Menu" />
              </Route>
            </Switch>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
