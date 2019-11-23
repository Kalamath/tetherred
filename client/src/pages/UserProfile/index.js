import React from "react";
// core components
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Chirpbox from "../../components/Chirps";
import Container from 'react-bootstrap/Container';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Post from "../../components/Post";
import spotify from "../../assets/imgs/spotify.png";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Images
import Rihanna from "../../assets/imgs/fakeCardImages/rihanna.jpg"

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
                alt="Spotify"
                style={{ height: "100%", width: "100%", display: "block" }}
                src={spotify}
                data-holder-rendered="true"
              />
              <iframe src="https://open.spotify.com/embed/album/1ATL5GLyefJaxhQzSPVrLX" title="spotify" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <Card className="bg-dark border border-secondary">
              <CardBody>
                <Post />
              </CardBody>
            </Card>

            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                src="http://silencenogood.net/wordpress/wp-content/uploads/2013/10/Drake-Too-Much-banner.jpg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>My Head In the Clouds : Memoirs by Drake</h4>
                <p>A shocking memoir from October's Very Own</p>
                <Button className="bg-transparent text-dark">Link</Button>
              </CardBody>
            </Card>

            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                src="https://bit.ly/2OaBYm8"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Takashi Murakami x OVO</h4>
                <p>Way back in July, Drake was spotted rocking a unique and eye-catching October’s Very Own x Takashi Murakami hoodie. Since then we’ve all been wondering where, or when, we could get our...</p>
                <Button className="bg-transparent text-dark">Link</Button>
              </CardBody>
            </Card>

            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                src={Rihanna}
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Shining Bright Like A Diamond</h4>
                <p>"I make way more money than Drake." - Rihanna says Drake is only sorta rich.</p>
                <Button className="bg-transparent text-dark">Link</Button>
              </CardBody>
            </Card>

            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                src="https://carbonmade-media.accelerator.net/31130675;1280x426.jpeg"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>ESports are Huge!</h4>
                <p>100 Thieves snag a major new investor.</p>
                <Button className="bg-transparent text-dark">Link</Button>
              </CardBody>
            </Card>

            <Card style={{ width: "100%" }}>
              <img
                className={classes.cardImgTop}
                data-src="holder.js/100px180/"
                alt="100%x180"
                style={{ height: "auto", width: "100%", display: "block", backgroundSize: "contain" }}
                src="https://ewedit.files.wordpress.com/2019/07/euphoria-03.jpg?w=3200&h=1576"
                data-holder-rendered="true"
              />
              <CardBody>
                <h4>Euphoria is a drug induced HIT</h4>
                <p>The Season 1 Finale leaves us with questions, suspicions and dizzyness.</p>
                <Button className="bg-transparent text-dark">Link</Button>
              </CardBody>
            </Card>
          </GridItem>
          <Chirpbox />
        </GridContainer>
      </Container>
    </div>
  );
}
