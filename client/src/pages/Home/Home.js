import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// import InputLabel from "@material-ui/core/InputLabel";
// import Grid from "@material-ui/core/Grid";
// import Language from "@material-ui/icons/Language";

// core components
import Carousel from "../../components/Carousel"
import GridItem from "../../components/Grid/GridItem.js";
import Container from 'react-bootstrap/Container';
// import GridContainer from "../../components/Grid/GridContainer.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
// import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
// import CardIcon from "../../components/Card/CardIcon";
// import CardFooter from "../../components/Card/CardFooter.js";
// import TextField from '@material-ui/core/TextField';

import paperMario from "../../assets/imgs/paper-mario.webp";
import newsBanner from "../../assets/imgs/latestNews.jpg";

import dashboardStyle from "../../assets/jss/material-dashboard-react/cardImagesStyles.js";
import GridContainer from "../../components/Grid/GridContainer.js";

import Chirpbox from "../../components/Chirp";


const styles = {
    ...dashboardStyle,
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
    const [selectedValue, setSelectedValue] = React.useState(null);
    return (
        <React.Fragment>
            
             {/* <GridContainer>  */}
             <Carousel />
                {/* <GridItem xs={12} sm={12} md={1}>
                </GridItem>
                <GridItem xs={12} sm={12} md={10}>
                    <Card className={classes.textWhite}>
                        <div className={classes.cardImgOverlay}>
                            <CardHeader color="primary">
                                <h4>News Title</h4>
                                <p>
                                    This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                                <p>Last updated 3 mins ago</p>
                            </CardHeader>
                        </div>
                        <img
                            className={classes.cardImg}
                            data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
                            alt="100%x270"
                            style={{ height: "270px", width: "100%", display: "block" }}
                            src={newsBanner}
                            data-holder-rendered="true"
                        />
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                </GridItem> */}
            {/* </GridContainer>  */}
            <Container>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <Radio
                            checked={selectedValue === "a"}
                            onChange={() => setSelectedValue("a")}
                            value="a"
                            name="radio button demo"
                            aria-label="A"
                            icon={<FiberManualRecord className={classes.radioUnchecked} />}
                            checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                            classes={{
                                checked: classes.radio
                            }}
                        />
                        <br />
                        <Radio
                            checked={selectedValue === "b"}
                            onChange={() => setSelectedValue("b")}
                            value="a"
                            name="radio button demo"
                            aria-label="A"
                            icon={<FiberManualRecord className={classes.radioUnchecked} />}
                            checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                            classes={{
                                checked: classes.radio
                            }}
                        />
                        <br />
                        <Radio
                            checked={selectedValue === "c"}
                            onChange={() => setSelectedValue("c")}
                            value="a"
                            name="radio button demo"
                            aria-label="A"
                            icon={<FiberManualRecord className={classes.radioUnchecked} />}
                            checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                            classes={{
                                checked: classes.radio
                            }}
                        />
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
                    </GridItem>
                    {/* <GridItem xs={12} sm={12} md={3}>
                        <Card style={{ width: "100%" }}>
                            <CardHeader color="info">
                                <h4>Chirp Box</h4>
                            </CardHeader>
                            <CardBody>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Write Chirp Here"
                                    multiline
                                    rows="5"
                                    defaultValue=""
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button color="info">Chirp</Button>
                            </CardBody>
                        </Card>
                    </GridItem> */}
                    <Chirpbox />
                </GridContainer>
            </Container>
        </React.Fragment>
    );
}
