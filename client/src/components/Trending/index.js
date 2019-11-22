import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

export default function Trending() {

    return (

        <Card className="bg-secondary" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>Trending</h4></CardHeader>
            <CardBody>
                <CardContent>
                    <List className="text-white">
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

