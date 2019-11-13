import React, {useEffect} from 'react';
import axios from 'axios';
import {useAuth} from '../../utils/customHooks';

function Logout({history}) {
    const [, setUserState] = useAuth();
    useEffect(() => {

        axios.get('/api/sessions/logout', {
            withCredentials: true
        }).then(resp => {
            setUserState({
                isLoggedIn: false
            })
            // Simluate a delay of 2 seconds before going to the homepage
            setTimeout(() => history.push('/'), 500);
        }).catch(err => {
            console.log(err)
        })
    }, []);
    
    return (
        <div class="container text-center">
            <h1>Logging you out...</h1>
            <br></br>
            <h4>See you next time!</h4>
        </div>
    )
}

export default Logout;