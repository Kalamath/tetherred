import React from "react";
// import { Link } from "react-router-dom";

// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import logo from '../../assets/imgs/TetherredFullWhite.png';


class Header extends React.Component {


  render() {

    return (
        <Navbar sticky="bottom" bg="light">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>

    );
  }
}
export default Header;
