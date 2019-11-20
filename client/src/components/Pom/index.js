import React from "react";
// import { Redirect } from './node_modules/react-router-dom';
// import axios from "axios";

// import GridItem from "../Grid/GridItem.js";
// import Container from './node_modules/react-bootstrap/Container';
// import GridContainer from "../Grid/GridContainer.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
// import TextField from '@material-ui/core/TextField';


export default function Suntory() {

    return (
        // <GridItem xs={12} sm={12} md={4}>
        <Card style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>Advertisement</h4></CardHeader>
            <CardBody>
                <img src="https://i.gifer.com/9Gm7.gif" alt="Pom" style={{ width: "100%" }} />
                <Button color="info" style={{ width: "100%" }}>
                    Learn More
                        </Button>
            </CardBody>
        </Card>
        // </GridItem>
    );
}

