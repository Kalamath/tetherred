// import Nav from "./components/Nav";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Carousel from 'react-bootstrap/Carousel'
// import Carousel from "./components/Carousel"
// import { Container } from "./components/Grid";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Homepage from './pages/Homepage';
// import Home from "./pages/Home";
import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';

import Dashboard from './pages/Dashboard';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup';

import UserProfile from "./pages/UserProfile";
// import Profile from "./pages/Profile";


class App extends React.Component {


  constructor() {
    super()
    this.state = {
      loggedIn: false,
      id: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/sessions', {
      withCredentials: true
    }).then(response => {
      console.log('Get user response: ');
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          id: response.data.user._id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          id: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <Header updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <br />
        <Route path="/" exact={true} render={() =>
          <Login
            updateUser={this.updateUser}
          />} />

        <Route path="/profile" exact={true} component={UserProfile} />

        <Route path="/dashboard" exact={true} component={Dashboard} />

        <Route path="/signup" exact={true}
          render={() =>
            <Signup
              updateUser={this.updateUser}
            />} />
        <Route path="/logout" exact={true}
          render={() =>
            <Logout
              updateUser={this.updateUser}
            />} />
        <Footer />
      </Router>
    );
  }
}

export default App;
