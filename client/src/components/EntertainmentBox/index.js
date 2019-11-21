import React from "react";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import EntertainmentCarousel from "../../components/EntertainmentCarousel";

export default function EntertainmentBox() {

    return (
            <Card className="bg-dark" style={{ width: "100%" }}>
            <CardHeader color="primary"><h4>News</h4></CardHeader>
                <CardBody>
                   <EntertainmentCarousel />
                </CardBody>
            </Card>
    );
}

