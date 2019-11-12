import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import Container from 'react-bootstrap/Container'
// import CardFooter from "../../components/Card/CardFooter.js";
// import CardHeader from "../../components/Card/CardHeader.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';

import avatar from "../../assets/imgs/faces/face-3.jpg";
import paperMario from "../../assets/imgs/paper-mario.webp";
import spotify from "../../assets/imgs/spotify.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
          <h4 className={classes.cardTitle}>Alec Thompson</h4>
          <p className={classes.description}>
            Don{"'"}t be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye
            I love Rick Owens’ bed design but the back is...
          </p>
          <Button color="primary" round>
            Follow
          </Button>
        </CardBody>
      </Card>
      {/* Feed Section */}
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "100%", width: "100%", display: "block" }}
                src={spotify}
                data-holder-rendered="true"
              />
              <CardBody>
                <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </CardBody>
            </Card>
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
                <Button color="primary">Go somewhere</Button>
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
                <Button color="primary">Go somewhere</Button>
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
                <Button color="primary">Go somewhere</Button>
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
                <Button color="primary">Go somewhere</Button>
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
                <Button color="primary">Go somewhere</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card style={{ width: "100%" }}>
              <CardBody>
                <h4>Send a Chirp</h4>
                <TextField
                  id="outlined-multiline-static"
                  label="ChirpBox"
                  multiline
                  rows="4"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <Button color="primary">Chirp</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
