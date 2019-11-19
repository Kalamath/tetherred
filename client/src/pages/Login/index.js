import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Logo from '../../assets/imgs/Logo.png';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      username: '',
      password: '',
      redirectTo: null,
      id: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    console.log(this.state.email);
    axios.post('/api/sessions/signin', {
      email: this.state.email,
      password: this.state.password
    }, {
      withCredentials: true
    })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            id: response.data._id
          })
          // update the state to redirect to home
          this.setState({
            redirectTo: '/dashboard'
          })
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
  };

  // And return the JS
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (

        <div>
          <br />
          <div className="container" >
            <div className="row content-justify-center">
              <div className="col-3">
              </div>

              <div className="col-6">
                <form className="form-signup">
                  <div className="text-center mb-4">
                    <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Welcome to Tetherred</h1>
                    <h2>Login Here</h2>
                  </div>

                  <div className="form-group">
                    <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="emailInput">Email</label>
                            <input
                              type="email"
                              id="emailInput"
                              name="email"
                              className="form-control"
                              aria-describedby="emailHelp"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                      </div>
                          <div className="form-group">
                            <label htmlFor="passwordInput">
                              Password
                      </label>
                            <input
                              type="password"
                              id="passwordInput"
                              className="form-control"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                            />
                          </div>
                          <hr></hr>
                      <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                  </div>

                  {/* <p>© Tetherred 2019</p> */}
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div >
        </div>

      )
    }
  }
}

export default Login;

