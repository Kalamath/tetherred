import React from "react";
import Card from "../../Card/Card.js";
import CardBody from "../../Card/CardBody.js";
import CardHeader from "../../Card/CardHeader.js";
import SportsCarousel from "../../Carousel's/SportsCarousel";

export default function SportsBox() {

    return (
            <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
            <CardHeader color="primary"><h4>Sports</h4></CardHeader>
                <CardBody>
                   <SportsCarousel />
                </CardBody>
            </Card>
    );
}

