import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../utils/customHooks';

// Because we're using the react-router-dom, we have a special "history" property 
// passed to child components. This will let us redirect the user later
function LoginPage({ history }) {
  // Here we have a local hook for the state of the email and password
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [errorMessage, setError] = useState(null);

  const [, setUser] = useAuth(); // Only pull out the `setUser` function from the custom hook


  // Define the form submission handler, to be used in the `onSubmit` event
  const handleLoginFormSubmit = (evt) => {
    evt.preventDefault();
    axios.post('/api/sessions/signin', {
      email: emailInput,
      password: passwordInput
    }, {
      withCredentials: true
    }).then(resp => {

      if (resp.data.success) {
        setUser({
          isLoggedIn: true
        });
        // Calling history.push() tells the React Router history to go to the passed page 
        history.push("/dashboard")
      } else {
        // call the local setError state handler
        setError("Invalid username/password")
      }
    }).catch(err => {
      console.log(err);
      setError(err.toString())
    })
  }

  // And return the JS
  return (
    <div className="container">
      <div className="row">
        <div class="col-6 text-center">
          <h1>Welcome!</h1>
        </div>
      </div>
      {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}
      <form onSubmit={handleLoginFormSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="emailInput">
                Email
                </label>
              <input
                type="email"
                id="emailInput"
                name="email"
                className="form-control rounded-pill"
                aria-describedby="emailHelp"
                onChange={evt => setEmail(evt.target.value)}
                />
              <small id="emailHelp" className="form-text text-muted">secret@email.com</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="passwordInput">
                Password
                </label>
              <input
                type="password"
                id="passwordInput"
                className="form-control rounded-pill"
                name="password"
                aria-describedby="passwordHelp"
                onChange={evt => setPassword(evt.target.value)}
                />
              <small id="passwordHelp" className="form-text text-muted">test123</small>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 text-center">
            <div class="btn-group-vertical">
              <button type="submit" class="btn btn-space bg-info rounded-pill text-white mx-auto">Login</button>
              <br></br>
              <a href="/signup">New here? Sign up!</a>
              {/* <button class="btn btn-space bg-warning rounded-pill text-white mx-auto">Sign Up</button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;