import React from "react";
import axios from "axios";

class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            loggedIn: false,
            email: null
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('/api/sessions').then(response => {
            console.log('Get user response: ')
            console.log(response.data);
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    email: response.data.user.email
                });
                console.log(`email from state ${this.state.email}`);
                this.getUserProfile();
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    email: null
                })
            }
        })
    };

    getUserProfile = () => {
        axios.get(`/api/profile/${this.state.email}`, 
        ).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    updateProfile = () => {
        const url = `/api/profile/${this.state.email}`;
        console.log(url);
        axios.post(url)
        .then(response => {
            console.log(`resp from profile post call ${response}`)
        }).catch(err => {
            console.log(err)
        });
    };


    render() {
        if (!this.state.loggedIn) {
            return (
                <div className="container">
                    <div className="alert alert-danger">
                        You must be logged in to view this page
              </div>
                </div>
            );
        } else {


            return (

                <div className="container">
                    <div className="alert alert-success">
                        welcome to the profile page of {this.state.email}
                    </div>
                    <button className="btn btn-info" onClick={this.updateProfile}> update profile </button>
                </div>
            );
        }
    }
}

export default Profile;