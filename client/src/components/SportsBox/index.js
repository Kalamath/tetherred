import React from "react";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import SportsCarousel from "../../components/SportsCarousel";

// const primary = blueGrey[500]; // #F44336

export default function SportsBox() {

    return (
        // <GridItem xs={12} sm={12} md={4}>
            <Card className="bg-dark" style={{ width: "100%" }}>
            <CardHeader color="primary"><h4>News</h4></CardHeader>
                <CardBody>
                   <SportsCarousel />
                </CardBody>
            </Card>
        // </GridItem>
    );
}

