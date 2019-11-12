// import React, {useState} from 'react';
// import axios from 'axios';
// import {useAuth} from '../../utils/customHooks';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from 'react-bootstrap/Container';
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from '../../components/Grid/GridItem';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// Because we're using the react-router-dom, we have a special "history" property 
// passed to child components. This will let us redirect the user later
// function LoginPage({history}) {
// Here we have a local hook for the state of the email and password
// const [emailInput, setEmail] = useState("");
// const [passwordInput, setPassword] = useState("");
// const [errorMessage, setError] = useState(null);

// const [, setUser] = useAuth(); // Only pull out the `setUser` function from the custom hook


// // Define the form submission handler, to be used in the `onSubmit` event
// const handleLoginFormSubmit = (evt) => {
//     evt.preventDefault();
//     axios.post('/api/sessions/signin', {
//         email: emailInput,
//         password: passwordInput
//     }, {
//         withCredentials: true
//     }).then(resp => {

//         if (resp.data.success) {
//             setUser({
//                 isLoggedIn: true
//             });
//             // Calling history.push() tells the React Router history to go to the passed page 
//             history.push("/dashboard")
//         } else {
//             // call the local setError state handler
//             setError("Invalid username/password")
//         }
//     }).catch(err => {
//         console.log(err);
//         setError(err.toString())
//     })
// }

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  // And return the JS
  return (
    <div>
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{ width: "100%" }}>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Welcome To Tetherred</h4>
              <p className={classes.cardCategoryWhite}>Login Here</p>
              </CardHeader>
              <CardBody>
                <TextField
                  required
                  id="standard-required"
                  label="User Name (Required)"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
                <Button color="primary">Login</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
  // return (

  //   <div className="container">
  //       <div className="row">
  //           <h1>Login</h1>
  //       </div>
  //       {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}
  //     <form onSubmit={handleLoginFormSubmit}>
  //       <div className="row">
  //         <div className="col-6">
  //           <div className="form-group">
  //             <label htmlFor="emailInput">
  //               Email
  //             </label>
  //             <input
  //               type="email"
  //               id="emailInput"
  //               name="email"
  //               className="form-control"
  //               aria-describedby="emailHelp"
  //               onChange={evt => setEmail(evt.target.value)}
  //             />
  //             <small id="emailHelp" className="form-text text-muted">secret@email.com</small>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-6">
  //           <div className="form-group">
  //             <label htmlFor="passwordInput">
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               id="passwordInput"
  //               className="form-control"
  //               name="password"
  //               aria-describedby="passwordHelp"
  //               onChange={evt => setPassword(evt.target.value)}
  //             />
  //             <small id="passwordHelp" className="form-text text-muted">test123</small>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="col">
  //           <button type="submit">Login</button>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // )
}

// export default LoginPage;