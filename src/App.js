import React, { useState } from "react";

import LandingPage from "./LandPage";
import Dashboard from "./Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <LandingPage setLoggedIn={setLoggedIn} />}
    </div>
  );
}

export default App;
