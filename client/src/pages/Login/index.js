import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    console.log(this.state.email);

    axios.post('/api/sessions/signin', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          })
          // update the state to redirect to home
          this.setState({
            redirectTo: '/dashboard'
          })
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
  }


  // And return the JS
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {

      return (

        <div className="container" >
          <div className="row">
            <h1>Login</h1>
          </div>
        
          <form onSubmit={this.handleSubmit}>
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
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.handleChange}
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
                    className="form-control"
                    name="password"
                    aria-describedby="passwordHelp"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <small id="passwordHelp" className="form-text text-muted">test123</small>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div >

      )

    }
  }

}


export default LoginPage;