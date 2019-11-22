import React from "react";
import axios from "axios";
import UserProfile from "../UserProfile";

import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";

import avatar from "../../assets/imgs/faces/face-3.jpg";
import blue from "../../assets/imgs/blue.jpg";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import Modal from "../../components/Modal";
// import { Modal } from "@material-ui/core";

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
                <React.Fragment>
                    <div>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={1}></GridItem>
                        <GridItem xs={12} sm={12} md={10}>
                        <Card profile>
                            <img
                                // className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="OVO"
                                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "cover" }}
                                src="https://wallpaperplay.com/walls/full/d/6/c/4305.jpg"
                                data-holder-rendered="true"
                            />
                            <CardAvatar profile>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    <img src={avatar} alt="..." />
                                </a>
                            </CardAvatar>
                            <CardBody profile>
                                {/* <h6 className={classes.cardCategory}>OVO</h6> */}
                                <h4 className={this.state.name}>Aubrey Graham</h4>
                                <p className={this.state.description}>
                                    Don{"'"}t be scared of the truth because we need to restart the
                                    human foundation in truth And I love you like Kanye loves Kanye
                                    I love Rick Owens’ bed design but the back is...
                                </p>
                                <Button color="success" round onClick={this.updateProfile}>
                                    Follow
                                </Button>
                                <Modal />
                            </CardBody>
                        </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}></GridItem>
                        </GridContainer>
                    </div>

                    <div>
                        <UserProfile />
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default Profile;