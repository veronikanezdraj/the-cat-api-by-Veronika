import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./config/routes";
import HeaderButtons from "./components/HeaderButtons";

export default function App() {
  return (
    <div>
      <ul>
        <HeaderButtons />
      </ul>
      <hr />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route path="/" component={() => <Redirect to="/votes" />} />
      </Switch>
    </div>
  );
}
