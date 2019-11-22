import React from "react";
import Card from "../Card/Card.js";
import Divider from '@material-ui/core/Divider';
// import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import mario from '../../assets/imgs/faces/face-3.jpg'

// import avatar1 from '../../assets/imgs/faces/face-3.jpg'

export default function People() {

    return (
        // 
        <Card className="bg-dark border border-secondary">
            {/* <CardContent> */}
                <List
                    className="text-white"
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader fixed className="text-white" component="div" id="nested-list-subheader">
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
                                <Avatar alt="Gabe" src="https://avatars2.githubusercontent.com/u/48465631?s=460&v=4" />
                            </ListItemAvatar>
                        <ListItemText primary="Gabriel de Leon : Front End Developer" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button>
                        <ListItemAvatar>
                                <Avatar alt="mario" src={mario} />
                            </ListItemAvatar>
                        <ListItemText primary="Sent mail" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button>
                        <ListItemAvatar>
                                <Avatar alt="mario" src={mario} />
                            </ListItemAvatar>
                        <ListItemText primary="Sent mail" />
                    </ListItem>
                </List>
            {/* </CardContent> */}
        </Card>
    );
}

