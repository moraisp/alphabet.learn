import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from './provider';
import { RoutePaths } from './routes.enum';
import { Home } from './home/home';

export function Routes() {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route exact path={RoutePaths.home} ><Home /></Route>
        </Switch>
      </Provider>
    </Router>
  );
}
