import React from 'react';
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Home />
    </div>
  );
}

export default App;