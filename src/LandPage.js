import React from "react";

const LandingPage = ({ setLoggedIn}) => {
  return  (
    <>
    <h1>Hello! You are not logged in.</h1>
    <button onClick={() => setLoggedIn(true)}>Log In</button>
    </>
  );

};

export default LandingPage;
