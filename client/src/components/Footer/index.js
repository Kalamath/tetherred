import React from "react";

import Navbar from 'react-bootstrap/Navbar';

// import logo from '../../assets/imgs/TetherredFullWhite.png';


class Header extends React.Component {


  render() {

    return (
        <Navbar sticky="bottom" bg="transparent" variant="dark">
        <Navbar.Brand href="#home">© Tetherred 2019</Navbar.Brand>
      </Navbar>

    );
  }
}
export default Header;
