import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/imgs/TetherredFullWhite.png';
import DarkMode from "../DarkMode";

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
              <DarkMode />
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

