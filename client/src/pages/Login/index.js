import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Logo from '../../assets/imgs/Logo.png';

class BasicTextFields extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
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
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.email)

    //request to server to add a new username/password
    axios.post('/api/sessions/signup', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log("signup response : ");
        console.log(response);

        if (response.status === 200) {
          console.log('successful signup');
          console.log(response.data.email);

          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          this.setState({
            redirectTo: '/'
          })
        } else {
          console.log('username already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)

      })
  };

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('handleSubmit');
  //   console.log(this.state.email);

  //   axios.post('/api/sessions/signin', {
  //     email: this.state.email,
  //     password: this.state.password
  //   }, {
  //     withCredentials: true
  //   })
  //     .then(response => {
  //       console.log('login response: ')
  //       console.log(response)
  //       if (response.status === 200) {
  //         // update App.js state
  //         this.props.updateUser({
  //           loggedIn: true,
  //           id: response.data._id
  //         })
  //         // update the state to redirect to home
  //         this.setState({
  //           redirectTo: '/dashboard'
  //         })
  //       }
  //     }).catch(error => {
  //       console.log('login error: ')
  //       console.log(error);

  //     })
  // }

  // And return the JS
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <br />
          <div className="container" >
            <div className="row">
              <div className="col">

              </div>
              <div className="col">
                <Form onSubmit={this.handleSubmit} className="form-signup">
                  <div className="text-center mb-4">
                    <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Welcome to Tetherred</h1>
                    <h2>Sign Up Here</h2>
                  </div>

                  <div className="form-group">
                    <Form.Row>
                      <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                        // defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                        // defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                  </div>
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="emailInput">Email</label>
                    <input
                      type="email"
                      id="emailInput"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">secret@email.com</small>
                  </div>
                  {/* Password */}
                  <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input
                      type="password"
                      id="passwordInput"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      aria-describedby="passwordHelp"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Please enter a fake, simple password that you don't usually use.</small>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  {/* <p>© Tetherred 2019</p> */}
                </Form>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            {/* <div className="row">
              <h1>Welcome To Tetherred</h1>
            </div> */}

            {/* <form onSubmit={this.handleSubmit}>
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
                <small id="emailHelp" className="form-text text-muted">secret@email.com</small>
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  id="passwordInput"
                  name="password"
                  className="form-control"
                  aria-describedby="passwordHelp"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form> */}
            {/* Sign-Up Form */}

          </div >
        </div>
      )
    }
  }
}



export default BasicTextFields;

