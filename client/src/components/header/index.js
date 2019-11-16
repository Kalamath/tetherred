import React from "react";
// import { Link } from "react-router-dom";

// import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button';

// import axios from "axios";
// import { Redirect } from 'react-router-dom';


import logo from '../../assets/imgs/TetherredFullBlack.png';


class Header extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     redirectTo: null

  //   }
  //   // this.handleSignup = this.handleSignup.bind(this)
  //   this.handleLogin = this.handleLogin.bind(this)
  //   this.handleChange = this.handleChange.bind(this)
  // }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // };

  // handleLogin(event) {
  //   event.preventDefault();
  //   console.log('handleLogin');
  //   console.log(this.state.email);

  //   axios.post('/api/sessions/signin', {
  //     email: this.state.email,
  //     password: this.state.password
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

  render() {

    const loggedIn = this.props.loggedIn;
    console.log('header render, props: ')
    console.log(this.props);

    // if (this.state.redirectTo) {
    //   return <Redirect to={{ pathname: this.state.redirectTo }} />
    // } else {

      return (
        <Navbar>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="300"
              height="62.5"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              {loggedIn ? (

                <div>

                  <Nav.Link href="/dashboard">Home</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>

                </div>

              ) : (

                  <div>
                    {/* <Form onSubmit={this.handleLogin}>
                      <Form.Row>
                        <Col>
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
                        </Col>
                        <Col>
                          <input
                            type="password"
                            id="passwordInput"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            aria-describedby="passwordHelp"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </Col>
                        <Col>
                          <Form.Label></Form.Label>
                          <Button variant="outline-success" onClick={this.handleLogin}>Login</Button>
                        </Col>
                      </Form.Row>
                    </Form> */}
                    <Nav.Link href="/signin">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                  </div>

                )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      );
    }
  }
// }

export default Header;
