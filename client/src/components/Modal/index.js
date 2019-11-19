import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from '../Card/CardBody.js';
import avatar from "../../assets/imgs/faces/face-3.jpg";
import TextField from '@material-ui/core/TextField';

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
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                                    id="standard-basic"
                                    className={classes.textField}
                                    label="First Name"
                                    margin="normal"
                                    />
                                    <TextField
                                    id="standard-basic"
                                    className={classes.textField}
                                    label="Last Name"
                                    margin="normal"
                                    />
                                </div>
                                <img src={avatar} alt="drake" style={{}} />
                                <h1 id="transition-modal-title">Aubrey Graham</h1>
                                <p id="transition-modal-description">Don{"'"}t be scared of the truth because we need to restart the
                                                        human foundation in truth And I love you like Kanye loves Kanye
                                    I love Rick Owens’ bed design but the back is...</p>
                                    
                                {/* Change the onClick to the proper route */}
                                <Button color="primary" round onClick={handleClose}>
                                    Update
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}