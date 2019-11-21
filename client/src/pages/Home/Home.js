import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import Container from '@material-ui/core/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import paperMario from "../../assets/imgs/paper-mario.webp";
import dashboardStyle from "../../assets/jss/material-dashboard-react/cardImagesStyles.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Chirpbox from "../../components/Chirps";
import Trending from "../../components/Trending";
import EntertainmentBox from "../../components/EntertainmentBox";
import SportsBox from "../../components/SportsBox";
import NewsBox from "../../components/NewsBox";
import Suntory from "../../components/Suntory/index.js";
import Pom from "../../components/Pom/index.js";
import People from "../../components/People/index.js";


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
            <Jumbotron className="bg-transparent">

                <GridContainer>

                    <GridItem xs={12} sm={12} md={4}>
                        <NewsBox />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <EntertainmentBox />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <SportsBox />
                    </GridItem>

                </GridContainer>
            </Jumbotron>


            <Container fixed>
            <Jumbotron className="bg-transparent">

                <GridContainer>

                    <GridItem xs={12} sm={12} md={3}>
                        <Trending />
                        <Suntory />
                        <People />
                        <Pom />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={paperMario}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Card title</h4>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </p>
                                <Button color="success">Go somewhere</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={paperMario}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Card title</h4>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </p>
                                <Button color="success">Go somewhere</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={paperMario}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Card title</h4>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </p>
                                <Button color="success">Go somewhere</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={paperMario}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Card title</h4>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </p>
                                <Button color="success">Go somewhere</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={paperMario}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Card title</h4>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </p>
                                <Button color="success">Go somewhere</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: "100%" }}>
                            <img
                                className={classes.cardImgTop}
                                data-src="holder.js/100px180/"
                                alt="100%x180"
                                style={{ height: "180px", width: "100%", display: "block" }}
                                src={paperMario}
                                data-holder-rendered="true"
                            />
                            <CardBody>
                                <h4>Card title</h4>
                                <p>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                    </p>
                                <Button color="success">Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </GridItem>

                    <Chirpbox />

                </GridContainer>
            </Jumbotron>
            </Container>
        </React.Fragment>
    );
}
