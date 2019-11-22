import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
// import Card from '@material-ui/core/Card';
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import Divider from '@material-ui/core/Divider';

// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';

// import Table from 'react-bootstrap/Table'
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import TableBody from '@material-ui/core/TableBody';
// import logo from '../../assets/imgs/Logo.png';
// import { ListItem, ListItemAvatar } from "@material-ui/core";

export default function Trending() {

    return (

        <Card className="" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>Trending</h4></CardHeader>
            <CardBody>
                <CardContent>
                    <List>
                        <ListItem button>
                            <ListItemAvatar></ListItemAvatar>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar></ListItemAvatar>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar></ListItemAvatar>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar></ListItemAvatar>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar></ListItemAvatar>
                            <ListItemText primary="Sent mail" />
                        </ListItem>
                    </List>
                </CardContent>
                <Button color="info" style={{ width: "100%" }}>
                    See More
                        </Button>
            </CardBody>
        </Card>
    );
}

