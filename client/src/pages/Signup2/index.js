import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Logo from '../../assets/imgs/Logo.png';



class SignUpPage extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      redirectTo: null

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  handleSubmit(event) {
    event.preventDefault();
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.email)

    //request to server to add a new username/password
    axios.post('/api/sessions/signup', {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log("signup response : ");
        console.log(response);

        if (response.status === 200) {
          console.log('successful signup');
          console.log(response.data.email);

          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          this.setState({
            redirectTo: '/'
          })
        } else {
          console.log('username already taken')
        }
      }).catch(error => {
        console.log('signup error: ')
        console.log(error)

      })
  };


  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {

      return (

        <div>
          <br />
          <div className="container" >
            <div className="row content-justify-center">
              <div className="col-3">
              </div>

              <div className="col-6">
                <form className="form-signup">
                  <div className="text-center mb-4">
                    <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal"> Welcome to Tetherred</h1>
                    <h2>Sign up to Create a New Account</h2>
                  </div>

                  <div className="form-group">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input
                          type="email"
                          id="emailInput"
                          name="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="usernameInput"> Username </label>
                        <input
                          type="text"
                          id="usernameInput"
                          name="username"
                          className="form-control"

                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="passwordInput">
                          Password
                        </label>
                        <input
                          type="password"
                          id="passwordInput"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <small id="passwordHelp" className="form-text text-muted">Please enter a password of 6 or more charachters.</small>
                      </div>
                      <hr></hr>

                      <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                  </div>

                  {/* <p>© Tetherred 2019</p>  */}
                </form>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div >
        </div>
          )
        }
      }
    }


            
export default SignUpPage;