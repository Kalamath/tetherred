import React from "react";
// Components
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
// Material UI
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
// Images
import drake from '../../assets/imgs/faces/face-3.jpg'
import mario from '../../assets/imgs/faces/paper-mario.webp'


export default function Trending() {

    return (

        <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>Trending</h4></CardHeader>
            <CardBody>
                    <List className="text-white">
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="gameon" src="https://scontent-lax3-1.cdninstagram.com/vp/819e8cd1d7b339209652a04d2d380338/5E544E3E/t51.2885-19/s150x150/46984059_719350801791666_4884382971043250176_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com" />
                            </ListItemAvatar>
                            <ListItemText primary="Game On Events" />
                        </ListItem>
                        <Divider className="text-white" variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="drake" src={drake} />
                            </ListItemAvatar>
                            <ListItemText primary="Aubrey Graham" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="mario" src={mario} />
                            </ListItemAvatar>
                            <ListItemText primary="Super Paper Mario" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="bachelor" src="https://pbs.twimg.com/profile_images/1082541751116664832/HqvLgnlC_400x400.jpg" />
                            </ListItemAvatar>
                            <ListItemText primary="The Bachelor" />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="ye" src="https://cdn.pastemagazine.com/www/articles/kanyewest_jesusisking_main.jpg" />
                            </ListItemAvatar>
                            <ListItemText primary="Kanye West" />
                        </ListItem>
                    </List>
                <Button className="btn btn-outline-light" style={{ width: "100%" }}>See More</Button>
            </CardBody>
        </Card>
    );
}

