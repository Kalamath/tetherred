import React from "react";
import Card from "../Card/Card.js";
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';

// import avatar1 from '../../assets/imgs/faces/face-3.jpg'

export default function People() {

    return (
        // 
        <Card className="bg-secondary">
            <CardContent>
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
        </Card>
    );
}

