import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Logo from '../../assets/imgs/Logo.png';

class BasicTextFields extends React.Component {
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
          <div className="container" >
            <div className="row">
              <h1>Welcome To Tetherred</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6">
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
                </div>
              </div>
              <div className="row">
                <div className="col-6">
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
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )}
  }
}
    
export default BasicTextFields;

