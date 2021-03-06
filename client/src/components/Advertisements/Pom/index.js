import React from "react";
import Button from "../../CustomButtons/Button";
import Card from "../../Card/Card";
import CardBody from "../../Card/CardBody";

export default function Suntory() {

    return (
        <Card className="bg-dark border border-secondary" style={{ width: "100%" }}>
            <CardBody className="text-white">
                ADVERTISEMENT
                <img src="https://i.gifer.com/9Gm7.gif" alt="Pom" style={{ width: "100%" }} />
                <Button className="btn btn-outline-light" style={{ width: "100%" }}>
                    Learn More
                        </Button>
            </CardBody>
        </Card>
    );
}

