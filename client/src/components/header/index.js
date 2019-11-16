import React from "react";
// import { Link } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import logo from '../../assets/imgs/TetherredFullBlack.png';


class Header extends React.Component {

  render() {

    const loggedIn = this.props.loggedIn;
    console.log('header render, props: ')
    console.log(this.props);

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
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control type="text" placeholder="Email" className="mr-sm-2" />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="Password" className="mr-sm-2" />
                      </Col>
                      <Col>
                        <Form.Label></Form.Label>
                        <Button variant="outline-success">Login</Button>
                      </Col>
                    </Form.Row>
                  </Form>
                  {/* <Nav.Link href="/signin">Login</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link> */}
                </div>

              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}
export default Header;
