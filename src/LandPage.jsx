/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';

const LandingPage = ({ setLoggedIn }) => {
  const onLogin = useCallback(() => setLoggedIn(true), [setLoggedIn]);
  return (
    <>
      <h1>Hello! You are not logged in.</h1>
      <button type="button" onClick={onLogin}>Log In</button>
    </>
  );
};

export default LandingPage;