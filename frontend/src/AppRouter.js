import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import * as routes from 'constants/routes';
import { Homepage, UserDetails } from 'views';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path={routes.HOME} component={Homepage} />
      <Route exact path={routes.USER_DETAILS()} component={UserDetails} />
    </Router>
  )
}

export default AppRouter;
