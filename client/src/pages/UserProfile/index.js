import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
// import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
// import CardHeader from "../../components/Card/CardHeader.js";
import Container from 'react-bootstrap/Container';
// import CardFooter from "../../components/Card/CardFooter.js";
// import CardHeader from "../../components/Card/CardHeader.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import InputLabel from "@material-ui/core/InputLabel";
// import TextField from '@material-ui/core/TextField';

// import avatar from "../../assets/imgs/faces/face-3.jpg";
// import blue from "../../assets/imgs/blue.jpg";
import paperMario from "../../assets/imgs/paper-mario.webp";
import hardCodeImage01 from "../../assets/imgs/fakeCardImages/184-700x500.jpg";
import hardCodeImage02 from "../../assets/imgs/fakeCardImages/423-700x500.jpg";
import hardCodeImage03 from "../../assets/imgs/fakeCardImages/442-700x500.jpg";
import hardCodeImage04 from "../../assets/imgs/fakeCardImages/524-700x500.jpg";
import hardCodeImage05 from "../../assets/imgs/fakeCardImages/557-700x500.jpg";
import hardCodeImage06 from "../../assets/imgs/fakeCardImages/628-700x500.jpg";
import hardCodeImage07 from "../../assets/imgs/fakeCardImages/791-700x500.jpg";
import hardCodeImage08 from "../../assets/imgs/fakeCardImages/841-700x500.jpg";
import hardCodeImage09 from "../../assets/imgs/fakeCardImages/910-700x500.jpg";
import hardCodeImage10 from "../../assets/imgs/fakeCardImages/987-700x500.jpg";
import spotify from "../../assets/imgs/spotify.png";
import Chirpbox from "../../components/Chirps";

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
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          {/* <Card profile>
            <img
              className={classes.cardImgTop}
              data-src="holder.js/100px180/"
              alt="100%x180"
              style={{ height: "180px", width: "100%", display: "block" }}
              src={blue}
              data-holder-rendered="true"
            />
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>OVO</h6>
              <h4 className={classes.cardTitle}>Aubrey Graham</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
          </p>
              <Button color="success" round>
                Follow
          </Button>
            </CardBody>
          </Card> */}
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
        </GridItem>
      </GridContainer>
      {/* Feed Section */}
      <Container>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card className="bg-transparent" style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "100%", width: "100%", display: "block" }}
                src={spotify}
                data-holder-rendered="true"
              />
              {/* <CardBody> */}
              <iframe src="https://open.spotify.com/embed/album/1ATL5GLyefJaxhQzSPVrLX" title="spotify" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              {/* </CardBody> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <Card style={{ width: "100%" }}>
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
                <Button color="success">Link</Button>
              </CardBody>
            </Card>
            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src={hardCodeImage02}
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Winter Getaways</h4>
                <p>
                  A ski resort with a hot tub AND a fondue chocolate fountain? Sign us up!
                    </p>
                <Button color="success">Link</Button>
              </CardBody>
            </Card>
            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src={hardCodeImage03}
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Map Accuracy Problems</h4>
                <p>
                  Sometimes a physical map is handy when you're running from Jason and in an area without internet.
                    </p>
                <Button color="success">Link</Button>
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
                <Button color="success">Link</Button>
              </CardBody>
            </Card>
            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src={hardCodeImage05}
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Red Dead Redemption 2 on PC looks AMAZING!!!</h4>
                <p>
                  PC MASTER RACE!!!
                    </p>
                <Button color="success">Link</Button>
              </CardBody>
            </Card>
            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "180px", width: "100%", display: "block" }}
                src={hardCodeImage06}
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Hipfire Photos</h4>
                <p>
                  My dad's portrait studio is hiring photographers! DM me to apply!
                    </p>
                <Button color="success">Link</Button>
              </CardBody>
            </Card>
          </GridItem>
          <Chirpbox />
        </GridContainer>
      </Container>
    </div>
  );
}
