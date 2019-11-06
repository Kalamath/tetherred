import React from 'react';
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Container } from "./components/Grid";
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Nav />
      <br></br> 
      <Container fluid>
      <Jumbotron />
      </Container>
      <Home />
    </div>
  );
}

export default App;