import React from "react";
import axios from "axios";

// Components
import Button from "../CustomButtons/Button.js";
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

        this.setState({ loading: true }, () => {
            axios.get("/api/chirps/all", {
                withCredentials: true
            }).then(response => {
                this.setState({ allChirps: response.data, loading: false }, () => {
                    setTimeout(this.getChirps, 2000);
                    // console.log(this.state.allChirps);
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
        // console.log(this.state.postChirp);
        axios.post("/api/chirps/post", {
            body: this.state.postChirp
        }, {
            withCredentials: true
        }).then(response => {
            console.log(`chirp post response ${response}`);
            this.setState({ postChirp: ''})
        }).catch(err => {
            console.log(err)
        });

    };

    render() {
        return (
            <GridItem xs={12} sm={12} md={3}>
                <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
                    <CardHeader color="info">
                        <h4>Chirp Box</h4>
                    </CardHeader>
                    <CardBody>
                        <TextField
                            inputProps={{ style: { fontFamily: 'calibri', color: 'white'}}}
                            label="Write Chirp Here"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            multiline
                            fullWidth
                            rows="5"
                            margin="normal"
                            name="chirpboxInput"
                            value={this.state.postChirp}
                            onChange={event => {
                                const { value } = event.target;
                                this.setState({ postChirp: value });
                            }}
                        />
                        <Button className="btn btn-outline-secondary" onClick={this.handleSubmit} style={{ width: "100%" }}>
                            Chirp
                        </Button>
                    </CardBody>
                </Card>
                {/* Pop Up Chirp Here */}
                <div>
                    <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
                        <CardHeader color="primary">
                            <h4>What's Chirpin'</h4>
                        </CardHeader>
                    </Card>
                    {this.state.allChirps ? this.state.allChirps.map((chirps, index) => {
                        if (index < 10) {
                            return (
                                <Card className="bg-dark border border-secondary" key={chirps._id} style={{ width: "100%" }}>
                                    <CardHeader color="info">
                                        <h6>@{chirps.author}</h6>
                                    </CardHeader>
                                    <CardBody style={{color: 'white'}}>
                                        {chirps.body}
                                    </CardBody>

                                </Card>

                            )
                        }
                    }) : 'not loaded'}

                </div>
            </GridItem >
        )
    }
}

export default Chirps;
