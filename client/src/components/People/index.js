import React from "react";
// import Button from "../CustomButtons/Button.js";
// import Card from "../Card/Card.js";
import Card from '@material-ui/core/Card';
// import CardBody from "../Card/CardBody.js";
// import CardHeader from "../Card/CardHeader.js";
import Divider from '@material-ui/core/Divider';

// import CardHeader from '@material-ui/core/CardHeader';
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
        <Card>
            {/* <CardHeader>Trending</CardHeader> */}
            <CardContent>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            People You May Know
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

