import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from '../Card/CardBody.js';
// import avatar from "../../assets/imgs/faces/face-3.jpg";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userid, setUserid] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('');
    const [hobbies, setHobbies] = useState('');


    useEffect(() => {
        axios.get('/api/sessions', {
            withCredentials: true
        }).then(response => {
            if (response.data.user) {
                // console.log(response.data.user._id);
                setUserid(response.data.user._id)
            } else {
                console.log('Get user: no user');
                setUserid(null);
            }
        })
    }, []);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log(`id from state`);
        console.log(userid)
        axios.post(`/api/profile/${userid}`, {
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            location: location,
            hobbies: hobbies,
        }, {
            withCredentials: true
        })
            .then(response => {
                console.log(`resp from profile post call ${response}`);
                setOpen(false);
                window.location.reload();
            }).catch(err => {
                console.log(err)
            });

    }

    return (
        <div>
            <Button color="success" round onClick={handleOpen}>
                Update Profile
      </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Card
                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", maxWidth: "500px", margin: "auto", textAlign: "center", fontFamily: "arial" }}
                        >
                            <CardBody>
                                <div>
                                    <TextField
                                        id="first-name"
                                        className={classes.textField}
                                        label="First Name"
                                        margin="normal"
                                        value={firstname}
                                        onChange={event => {

                                            setFirstname(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        id="last-name"
                                        className={classes.textField}
                                        label="Last Name"
                                        margin="normal"
                                        value={lastname}
                                        onChange={event => {

                                            setLastname(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        id="dob"
                                        className={classes.textField}
                                        label="Date of Birth (MM-DD)"
                                        margin="normal"
                                        value={dob}
                                        onChange={event => {

                                            setDob(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        id="location"
                                        className={classes.textField}
                                        label="Lives In"
                                        margin="normal"
                                        value={location}
                                        onChange={event => {

                                            setLocation(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        id="hobbies"
                                        className={classes.textField}
                                        label="Hobbies/Interests"
                                        margin="normal"
                                        value={hobbies}
                                        onChange={event => {

                                            setHobbies(event.target.value);
                                        }}
                                    />
                                </div>
                                <Button color="info" round onClick={handleSubmit}> Submit </Button>
                                <Button color="primary" round onClick={handleClose}>
                                    Cancel
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}