// from tetherred branch 
import React from "react";
// import { Redirect } from './node_modules/react-router-dom';
import axios from "axios";

import GridItem from "../Grid/GridItem.js";
// import Container from './node_modules/react-bootstrap/Container';
// import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import Button from "../CustomButtons/Button.js";


class Chirps extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postChirp: "",
            allChirps: [],
            loading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.getChirps = this.getChirps.bind(this)

    }

    componentDidMount() {
        this.getChirps();
    };


    getChirps() {

        if (this.state.loading) {
            return;
        }

        this.setState({loading: true}, () => {
            axios.get("/api/chirps/all", {
                withCredentials: true
            }).then(response => {
                this.setState({ allChirps: response.data, loading: false }, () => {
                    setTimeout(this.getChirps, 2000);
                    console.log(this.state.allChirps);
                });
            }).catch(err => {
                console.log(`error at API call ${err}`);
            });
        })

    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.postChirp);
        axios.post("/api/chirps/post", {
            body: this.state.postChirp
        }, {
            withCredentials: true
        }).then(response => {
            console.log(`chirp post response ${response}`);
        }).catch(err => {
            console.log(err)
        });

    };

    render() {

        // console.log(this.state.postChirp);
        console.log(this.state.allChirps);

        
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
                {/* Pop Up Chirp Here */}
                <div>
                    <Card style={{ width: "100%" }}>
                        <CardHeader color="primary">
                            <h4>what's Chirpin'</h4>
                        </CardHeader>

                        {this.state.allChirps ? this.state.allChirps.map(chirps => {
                            return (
                                
                                <CardBody  key={chirps._id}>
                                    
                                    <Card style={{ width: "100%" }}>
                                    <CardHeader color="info">
                                        <h6>{chirps.author}</h6>
                                    </CardHeader>
                                    <CardBody>
                                        {chirps.body}
                                    </CardBody>
                                   
                               </Card>
                               </CardBody>
                             
                            )
                        }) : 'not loaded'}

                    </Card>
                    
                </div>
            </GridItem >
        )
    }
}

export default Chirps;
