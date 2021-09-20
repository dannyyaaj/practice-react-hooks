/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Switch, Route, Redirect, useLocation, useHistory,
} from 'react-router-dom';

import LandingPage from './LandPage';
import Dashboard from './Dashboard';
import useFirebaseAuth from './useFirebaseAuth';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const { user, login, logout } = useFirebaseAuth();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (user && location.pathname !== '/dashboard') {
      // redirect to dashboard
      console.log('logged in! redirection...');
      history.push('/dashboard');
    } else if (!user && location.pathname !== '/') {
      // redirect to home page
      console.log('not logged in! redirecting...');
      history.push('/');
    }
  }, [user, location.pathname]);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage login={login} />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard logout={logout} />
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
