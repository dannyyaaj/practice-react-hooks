import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './LandPage';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <Dashboard setLoggedIn={setLoggedIn} />
      ) : (
        <LandingPage setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
