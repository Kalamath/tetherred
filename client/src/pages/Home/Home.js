import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
    // Setting our component's initial state
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        this.loadBooks();
    }

    // Loads all books  and sets them to this.state.books
    loadBooks = () => {
        // API.getBooks()
        //   .then(res =>
        //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        //   )
        //   .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    deleteBook = id => {
        // API.deleteBook(id)
        //   .then(res => this.loadBooks())
        //   .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        // const { name, value } = event.target;
        // this.setState({
        //   [name]: value
        // });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        // event.preventDefault();
        // if (this.state.title && this.state.author) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-3 sm-12">
                        <Form>
                            {['checkbox'].map(type => (
                                <div key={type} className="mb-3">
                                    <Form.Check type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label>{`Photos`}</Form.Check.Label>
                                        {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                                    </Form.Check>
                                </div>
                            ))}
                            {['checkbox'].map(type => (
                                <div key={type} className="mb-3">
                                    <Form.Check type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label>{`News`}</Form.Check.Label>
                                        {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                                    </Form.Check>
                                </div>
                            ))}
                            {['checkbox'].map(type => (
                                <div key={type} className="mb-3">
                                    <Form.Check type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label>{`Family & Friends`}</Form.Check.Label>
                                        {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                                    </Form.Check>
                                </div>
                            ))}
                        </Form>
                    </Col>
                    <Col size="md-6" style="position: absolute; overflow-y: scroll;">
                        <Jumbotron>
                            <Container>
                                <Card>
                                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTojRfbevBO4zr6_0sB3-4OtqRHW7nbpVDcYXIPIA67IY6NRVza" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Jumbotron>
                        <Jumbotron />
                        <Jumbotron />
                        <Jumbotron />
                        <Jumbotron />
                        <Jumbotron />
                        <Jumbotron />
                        <Jumbotron />
                    </Col>
                    <Col size="md-3">
                        <Jumbotron>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Chirp Box</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Form>
                        </Jumbotron>
                        <Jumbotron />
                        <Jumbotron />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
