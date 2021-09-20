/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const LandingPage = ({ login }) => (
  <>
    <h1>Hello! You are not logged in.</h1>
    <button type="button" onClick={login}>Log In</button>
  </>
);

export default LandingPage;
