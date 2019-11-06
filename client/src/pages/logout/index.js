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
            setTimeout(() => history.push('/'), 2000);
        }).catch(err => {
            console.log(err)
        })
    }, []);
    
    return (
        <div>
            Logging you out...
        </div>
    )
}

export default Logout;