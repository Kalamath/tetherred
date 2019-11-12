// import React, {useState} from 'react';
// import axios from 'axios';
// import {useAuth} from '../../utils/customHooks';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
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
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="outlined"
          />
        </div>
      </form>
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