import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Logout extends React.Component {

    constructor() {
        super();
        this.state = {
            redirectTo: null
        }
        this.logout = this.logout.bind(this)
    };

    componentDidMount() {
        this.logout()
    }

    logout() {
        console.log('logging out');
        axios.post('/api/sessions/logout', {
                withCredentials: true
        }).then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    id: null
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })
            }
        }).catch(error => {
            console.log('Logout error' + error);
        })
    }


    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (

                <div>
                    Logging you out...
        </div >
            )
        }
    }
}

export default Logout;