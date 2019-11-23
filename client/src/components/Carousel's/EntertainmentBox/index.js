import React from "react";
import Card from "../../Card/Card.js";
import CardBody from "../../Card/CardBody.js";
import CardHeader from "../../Card/CardHeader.js";
import EntertainmentCarousel from "../../Carousel's/EntertainmentCarousel";

export default function EntertainmentBox() {

    return (
            <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>Entertainment</h4></CardHeader>
                <CardBody>
                   <EntertainmentCarousel />
                </CardBody>
            </Card>
    );
}

