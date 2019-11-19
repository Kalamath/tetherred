import React from "react";
// import { Redirect } from './node_modules/react-router-dom';
// import axios from "axios";

import GridItem from "../Grid/GridItem.js";
// import Container from './node_modules/react-bootstrap/Container';
// import GridContainer from "../Grid/GridContainer.js";
// import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
// import TextField from '@material-ui/core/TextField';
import SportsCarousel from "../../components/SportsCarousel";


export default function SportsBox() {

    return (
        <GridItem xs={12} sm={12} md={4}>
            <Card className="bg-dark" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>News</h4></CardHeader>
                <CardBody>
                   <SportsCarousel />
                </CardBody>
            </Card>
        </GridItem>
    );
}

