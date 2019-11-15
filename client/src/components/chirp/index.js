import React from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";

import GridItem from "../../components/Grid/GridItem.js";
import Container from 'react-bootstrap/Container';
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import Button from "../../components/CustomButtons/Button.js";


class chirps extends React.Component {

    constructor() {
        super();
        this.state = {
            postChirp: "",
            allChirps: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.componentDidMount = this.componentDidMount.bind(this)
        this.getChirps = this.getChirps.bind(this)

    }

    componentDidMount() {
        this.getChirps();
    };

    // componentWillUnmount() {
    //     clearInterval();
    // }

    getChirps() {

        axios.get("/api/chirps/all").then(response => {
            console.log(response);
        }).catch(err => {
            console.log(`error at API call ${err}`);
        });
        // setInterval(this.getChirps, 2000);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.postChirp);
       
    };

    render() {
        // console.log(this.state.postChirp);
        return (

            <GridItem xs={12} sm={12} md={3}>
                <Card style={{ width: "100%" }}>
                    <CardHeader color="info">
                        <h4>Chirp Box</h4>
                    </CardHeader>
                    <CardBody>
                        <TextField
                            id="outlined-multiline-static"
                            label="Write Chirp Here"
                            defaultValue={this.state.postChirp}
                            multiline
                            rows="5"
                            // className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="chirpbox"
                            onChange={event => {
                                const { value } = event.target;
                                this.setState({ postChirp: value });
                            }}
                        />
                        <Button color="info" onClick={this.handleSubmit} >
                            Chirp
                        </Button>
                    </CardBody>
                </Card>
            </GridItem>


        )
    }


}

export default chirps;
