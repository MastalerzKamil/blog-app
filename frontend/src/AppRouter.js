import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import * as routes from 'constants/routes';
import { Homepage } from 'views';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path={routes.HOME} component={Homepage} />
    </Router>
  )
}

export default AppRouter;
