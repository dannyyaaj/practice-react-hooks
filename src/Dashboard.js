import React from "react";

const Dashboard = ({ setLoggedIn }) => {
  return (
    <>
    <h1>Welcome to the dashboard! You are logged in.</h1>
    <button onClick={() => { setLoggedIn(false)}} >Sign Out</button>
    </> 
  );

};

export default Dashboard;