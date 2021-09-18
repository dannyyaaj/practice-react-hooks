import React, { useState } from 'react';

import LandingPage from './LandPage';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggdIn] = useState(false);
  
  return (
    <div>
      {loggedIn ? <Dashboard /> : <LandingPage/>}
    </div>
  );
}

export default App;
