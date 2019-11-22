import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import Container from 'react-bootstrap/Container';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Post from "../../components/Post";
import paperMario from "../../assets/imgs/paper-mario.webp";
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
      </Container>
    </div>
  );
}
