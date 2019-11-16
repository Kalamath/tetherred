import React from "react";

// import Carousel from "../../components/Carousel"
// import Header from "../../components/Header"
import Home from "../Home"
import axios from "axios";



class Dashboard extends React.Component {
  
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
      console.log('Get user response: ')
      console.log(response.data);
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
  if (!this.state.loggedIn) {
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
      <br />
      <Home />
    </div>
  );
}
}

export default Dashboard;