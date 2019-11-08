import React from "react";
import { useAuth } from "../../utils/customHooks";
import Carousel from "../../components/Carousel"
import Header from "../../components/Header"
import Home from "../Home"


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
    <div>
    <Header />
    <br />
    <Carousel />
    <br />
    <Home />
  </div>
  );
}

export default Dashboard;