import React from 'react';
import Nav from "./components/Nav";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import { Container } from "./components/Grid";
import Home from "./pages/Home"

import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch, 
//   Route
// } from 'react-router-dom';
// import axios from 'axios';
// import Header from './components/Header';
// import Homepage from './pages/Homepage';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Logout from './pages/Logout';
// import Signup from './pages/signup';
// import {useAuth} from './utils/customHooks';

function App() {

  // const [, setUser] = useAuth();

  // const runOnce = true;
  // useEffect(() => {
  //       axios
  //       .get("/api/sessions/start", {
  //         withCredentials: true
  //       })
  //       .then(resp => {
  //         if (resp.data.isLoggedIn) {
  //           setUser({ isLoggedIn: true });
  //         } else {
  //           setUser({ isLoggedIn: false });
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  // }, 
  // // By passing an empty array of dependencies as the second parameter, this ensures that `useEffect` only runs once
  // [runOnce]); 


  return (
    <div>
      <Nav />
      <br></br>
      <Container >
        <Jumbotron>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=".\imgs\bike.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=".\imgs\lift.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=".\imgs\swim.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Jumbotron>
      </Container>
      <Home />
    </div>
    // <Router>
    //     <Header />
    //     <Switch>
    //       <Route path="/" exact={true} component={Homepage} />
    //       <Route path="/dashboard" exact={true} component={Dashboard} />
    //       <Route path="/signin" exact={true} component={Login} />
    //       <Route path="/signup" exact={true} component={Signup} />
    //       <Route path="/logout" exact={true} component={Logout} />
    //     </Switch>
    // </Router>
  );
}

export default App;
