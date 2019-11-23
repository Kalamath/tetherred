import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";

// Material UI
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

export default function People() {

    return (
        // 
        <Card className="bg-dark border border-secondary">
            <CardBody>
                <List
                    className="text-white"
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader className="text-white" component="div" id="nested-list-subheader">
                            PEOPLE YOU MAY KNOW
                  </ListSubheader>}
                >
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Syeda" src="https://avatars2.githubusercontent.com/u/50857238?s=460&v=4" />
                        </ListItemAvatar>
                        <ListItemText primary="Syeda Zaidi : Back End Developer" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Martell" src="https://avatars1.githubusercontent.com/u/24293243?s=460&v=4" />
                        </ListItemAvatar>
                        <ListItemText primary="Martell Harding : Front End Developer" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Ashton" src="https://ca.slack-edge.com/TK0LLTYSK-UJSC3J1FD-2917183f4f40-512" />
                        </ListItemAvatar>
                        <ListItemText primary="Ashton Roth : Back End Developer : Project Manager" />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="Gabe" src="https://avatars2.githubusercontent.com/u/48465631?s=460&v=4" />
                        </ListItemAvatar>
                        <ListItemText primary="Gabriel de Leon : Front End Developer" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
                <Button className="btn btn-outline-light" style={{ width: "100%" }}>See More</Button>
            </CardBody>
        </Card>
    );
}

