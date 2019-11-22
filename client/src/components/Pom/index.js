import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";

export default function Suntory() {

    return (
        <Card className="bg-dark" style={{ width: "100%" }}>
            <CardBody className="text-white">
                ADVERTISEMENT
                <img src="https://i.gifer.com/9Gm7.gif" alt="Pom" style={{ width: "100%" }} />
                <Button color="info" style={{ width: "100%" }}>
                    Learn More
                        </Button>
            </CardBody>
        </Card>
    );
}

