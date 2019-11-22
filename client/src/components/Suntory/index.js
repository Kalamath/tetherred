import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";

export default function Suntory() {

    return (
        <Card className="bg-dark" style={{ width: "100%" }}>
            <CardBody className="text-white">
            ADVERTISEMENT
                <img src="https://vignette.wikia.nocookie.net/whiskey/images/7/70/Bill_Murray.jpg/revision/latest?cb=20120203225344" alt="John" style={{ width: "100%" }} />
                <Button color="info" style={{ width: "100%" }}>
                    Learn More
                        </Button>
            </CardBody>
        </Card>
    );
}

