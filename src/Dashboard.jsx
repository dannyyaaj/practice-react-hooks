/* eslint-disable react/prop-types */
import React from 'react';

const Dashboard = ({ logout }) => (
  <>
    <h1>Welcome to the dashboard! You are logged in.</h1>
    <button type="button" onClick={logout}>Log Out</button>
  </>
);
export default Dashboard;
