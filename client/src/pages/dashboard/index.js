import React from "./node_modules/react";
import { useAuth } from "../../utils/customHooks";

function Dashboard() {
  const [userState] = useAuth();
  if (!userState.isLoggedIn) {
    return (
      <div className="container">
        <div className="alert alert-danger">
          You must be logged in to view this page
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Dashboard</h1>
      </div>
      <div className="row">
        <p>I am an amazing dashboard</p>
      </div>
    </div>
  );
}

export default Dashboard;