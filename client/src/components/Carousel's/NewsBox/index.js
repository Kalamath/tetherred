import React from "react";
import Card from "../../Card/Card.js";
import CardBody from "../../Card/CardBody.js";
import CardHeader from "../../Card/CardHeader.js";
import NewsCarousel from "../../Carousel's/NewsCarousel";

export default function NewsBox() {

    return (
            <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>News</h4></CardHeader>
                <CardBody>
                   <NewsCarousel />
                </CardBody>
            </Card>
    );
}

