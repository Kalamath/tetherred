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

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('header render, props: ')
    console.log(this.props);


    return (
      <Navbar>
        {loggedIn ? (
        <Navbar.Brand href="/dashboard">
          <img
            alt=""
            src={logo}
            width="300"
            height="62.5"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        ) : ( 
          <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="300"
            height="62.5"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        )}
        <Navbar.Toggle />
        {loggedIn ? (

          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">

              <Nav.Link href="/dashboard">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>

            </Nav>
          </Navbar.Collapse>


        ) : (

            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end">

                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>

              </Nav>
            </Navbar.Collapse>

          )}

      </Navbar>

    );
  }
}

export default Header;

