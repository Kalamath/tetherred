import React from "react";
import axios from "axios";

class Profile extends React.Component {

    constructor() {
        super()
        this.state = {
            loggedIn: false,
            id: null,
            name: null,
            description: null
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
        axios.get('/api/sessions', {
            withCredentials: true
          }).then(response => {
            console.log('Get user response: ')
            console.log(response.data);
            // console.log("req.user "+ req.user);
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    id: response.data.user._id
                });
                console.log(`id from state ${this.state.id}`);
                this.getUserProfile();
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    id: null
                })
            }
        })
    };

    getUserProfile = () => {
        axios.get(`/api/profile/${this.state.id}`, {
            withCredentials: true
        }).then(response => {
            console.log(response.data);
            this.setState({
                name: response.data.name,
                description: response.data.description
            })
        }).catch(err => {
            console.log(err);
        });
    };

    updateProfile = () => {
        const url = `/api/profile/${this.state.id}`;
        console.log(url);
        
        axios.post(url, {}, {
            withCredentials: true
        })
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
                        welcome to the profile page of {this.state.name}
                        <p> Here's a short description "{this.state.description}"</p>
                    </div>
                    <button className="btn btn-info" onClick={this.updateProfile}> update profile </button>
                </div>
            );
        }
    }
}

export default Profile;