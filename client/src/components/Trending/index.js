import React from "react";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import Table from 'react-bootstrap/Table'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import logo from '../../assets/imgs/Logo.png'

export default function Trending() {

    return (
        <Card className="bg-dark" style={{ width: "100%" }}>
            <CardHeader color="danger"><h4>Trending</h4></CardHeader>
            <CardBody>
                <Table hover>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-white">1<img alt="icon" src={logo} style={{ width: "20%" }} />Tetherred</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">1<img alt="icon" src={logo} style={{ width: "20%" }} />Tetherred</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">1<img className="text" alt="icon" src={logo} style={{ width: "20%" }} />Tetherred</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">1<img alt="icon" src={logo} style={{ width: "20%" }} />Tetherred</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-white">1<img alt="icon" src={logo} style={{ width: "20%" }} />Tetherred</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button color="info" style={{ width: "100%" }}>
                    See More
                        </Button>
            </CardBody>
        </Card>
    );
}

