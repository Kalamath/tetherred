import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/customHooks";


function SignUpPage({ history }) {

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [, setUser] = useAuth();

  const HandleSignupFormSubmit = event => {
    event.preventDefault();

    axios.post("/api/sessions/signup", {
      email: emailInput,
      password: passwordInput
    }, {
      withCredentials: true
    }).then(response => {

      if (response.data.success) {
        setUser({
          isLoggedIn: true
        });

        history.push("/dashboard")
      } else {

        setErrorMessage("Account with this email already exists.")
      }
    }).catch(err => {
      console.log(err);
      setErrorMessage(err.toString())
    })
  }


  return (
    <div className="container">
      <div className="row">
        <div class="col-6 text-center">
          <h1>Create a New Account</h1>
        </div>
      </div>
      {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : null}
      <form onSubmit={HandleSignupFormSubmit}>
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
                onChange={evt => setEmailInput(evt.target.value)}
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
                onChange={evt => setPasswordInput(evt.target.value)}
              />
              <small id="passwordHelp" className="form-text text-muted">test123</small>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 text-center">
            <div class="btn-group-vertical">
              <button type="submit" class="btn btn-space bg-info rounded-pill text-white mx-auto">Create Account</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage;