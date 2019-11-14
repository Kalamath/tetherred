import React from "react";
import axios from "axios";

class chirps extends React.Component {

    state = {
        chirpsData: null,

    }


    componentDidMount() {
        this.getChirps();
    };

    getChirps() {

        axiox.get("/api/chirps/all").then( response => {
            console.log(response);
        }).catch( err => {
            console.log(`error at API call ${err}`);
        });
        setTimeout(this.getChirps, 5000);
    };

    render() {
        return (
            <div>
                <p> will render the data here from {this.state.chirpsData} </p>
              </div>
        )
    }


}
