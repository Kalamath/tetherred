import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import Table from 'react-bootstrap/Table'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import logo from '../../assets/imgs/Logo.png'

export default function People() {

    return (
        <Card style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>People You May Know</h4></CardHeader>
            <CardBody>
                <Table hover>
                    <TableRow>
                        <TableCell>1<img alt="icon" src={logo} style={{ width: "20%" }} />Somebodies Mom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1<img alt="icon" src={logo} style={{ width: "20%" }} />Someone's Cousin</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1<img alt="icon" src={logo} style={{ width: "20%" }} />My Friend</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1<img alt="icon" src={logo} style={{ width: "20%" }} />Your Friend</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1<img alt="icon" src={logo} style={{ width: "20%" }} />Our Friend</TableCell>
                    </TableRow>
                </Table>
                <Button color="info" style={{ width: "100%" }}>
                    See More
                        </Button>
            </CardBody>
        </Card>
    );
}

