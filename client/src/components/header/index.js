import React from "react";
// import { Link } from "react-router-dom";
import { useAuth } from "../../utils/customHooks";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [state] = useAuth();
  return (
    <Navbar>
      <Navbar.Brand href="/">Tetherred</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/signin">Login</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link className="navbar-brand" to="/">
    //     React Sessions Demo
    //   </Link>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       {/* <li className="nav-item active">
    //         <Link className="nav-link" to="/">
    //           Home
    //         </Link>
    //       </li> */}
    //       <li className="nav-item">
    //         {state.isLoggedIn ? (
    //           <Link className="nav-link" to="/dashboard">
    //             Dashboard
    //           </Link>
    //         ) : (
    //             <div>
    //               <Link className="nav-link" to="/">
    //                 Login
    //             </Link>
    //               <Link className="nav-link" to="/signup">
    //                 SignUp
    //             </Link>
    //             </div>
    //           )}
    //       </li>
    //       {state.isLoggedIn ? (
    //         <li>
    //           <Link className="nav-link" to="/logout">
    //             Logout
    //           </Link>
    //         </li>
    //       ) : null}
    //     </ul>
    //   </div>
    // </nav>
  );
}
export default Header;
