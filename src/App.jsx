/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Switch, Route, Redirect, useLocation, useHistory,
} from 'react-router-dom';

import LandingPage from './LandPage';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (loggedIn && location.pathname !== '/dashboard') {
      // redirect to dashboard
      history.push('/dashboard');
    } else if (!loggedIn && location.pathname !== '/') {
      // redirect to home page
      console.log('not logged in! redirecting...');
      history.push('/');
    }
  }, [location.pathname]);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard setLoggedIn={setLoggedIn} />
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
