import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import Container from '@material-ui/core/Container';
import Button from '../../components/CustomButtons/Button';
// import Button from 'react-bootstrap/Button';
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import hardCodeImage01 from "../../assets/imgs/fakeCardImages/184-700x500.jpg";
import hardCodeImage04 from "../../assets/imgs/fakeCardImages/524-700x500.jpg";
import dashboardStyle from "../../assets/jss/material-dashboard-react/cardImagesStyles.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Chirpbox from "../../components/Chirps";
import Trending from "../../components/Trending";
import EntertainmentBox from "../../components/Carousel's/EntertainmentBox";
import SportsBox from "../../components/Carousel's/SportsBox";
import NewsBox from "../../components/Carousel's/NewsBox";
import Suntory from "../../components/Advertisements/Suntory";
import Pom from "../../components/Advertisements/Pom";
import People from "../../components/People/index.js";
import Post from "../../components/Post/index.js";
import Icon from '@material-ui/core/Icon';

const styles = {
    ...dashboardStyle,
    root: {
        backgroundColor: "#212121",
    },
    cardTitle: {
        marginTop: "0",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
};

const useStyles = makeStyles(styles);

export default function CardBasic() {
    const classes = useStyles();
    // const [selectedValue, setSelectedValue] = React.useState(null);
    return (
        <React.Fragment>
            {/* <GridContainer>  */}
            {/* <Jumbotron className="bg-transparent"> */}

            <GridContainer>

                <GridItem xs={12} sm={4} md={4}>
                    <NewsBox />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                    <EntertainmentBox />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                    <SportsBox />
                </GridItem>

            </GridContainer>
            {/* </Jumbotron> */}

            <Container fixed>
                {/* <Jumbotron className="bg-transparent"> */}

                <GridContainer>

                    <GridItem xs={12} sm={12} md={3}>
                        <Trending />
                        <Suntory />
                        <People />
                        <Pom />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Card className="bg-dark border border-secondary">
                            <CardBody>
                                <Post />
                            </CardBody>
                        </Card>
                        <Card className="" style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={hardCodeImage01}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Desert Dune Night Picnic</h4>
                                <p>
                                    Night trips out on the Sahara are the latest romantic getaway for millenial couples.
                    </p>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-comments"></Icon> 17 Comments</Button>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-share"></Icon> Share</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src="https://bit.ly/2XFA4NF"
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Red Dead Redemption 2 on PC looks AMAZING!!!</h4>
                                <p>
                                    PC MASTER RACE!!!
                    </p>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-comments"></Icon> 2 Comments</Button>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-share"></Icon> Share</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src="https://media.giphy.com/media/fP1wyl45HJGBW/giphy.gif"
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Winter Getaways</h4>
                                <p>
                                    A ski resort with a hot tub AND a fondue chocolate fountain? Sign us up!
                    </p>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-comments"></Icon> 32 Comments</Button>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-share"></Icon> Share</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                                src="https://i.gifer.com/9yCP.gif"
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Map Accuracy Problems</h4>
                                <p>
                                    Sometimes a physical map is handy when you're running from Jason and in an area without internet.
                    </p>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-comments"></Icon> 13 Comments</Button>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-share"></Icon> Share</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={hardCodeImage04}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Trams are the best commuting option?</h4>
                                <p>
                                    Take this poll and let us know what you think.
                    </p>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-comments"></Icon> 9 Comments</Button>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-share"></Icon> Share</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                                src="https://www.thecasefarm.co.uk/wp-content/uploads/2017/07/Talia-banner-new.jpg"
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Hipfire Photos</h4>
                                <p>
                                    My dad's portrait studio is hiring photographers! DM me to apply!
                    </p>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-comments"></Icon> 5 Comments</Button>
                                <Button className="bg-transparent text-dark"><Icon className="fa fa-share"></Icon> Share</Button>
                            </CardBody>
                        </Card>
                    </GridItem>

                    <Chirpbox />

                </GridContainer>
                {/* </Jumbotron> */}
            </Container>
        </React.Fragment>
    );
}
