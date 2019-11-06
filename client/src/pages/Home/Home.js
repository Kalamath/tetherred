import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
            <Jumbotron>
              <h1>Options List</h1>
            </Jumbotron>
        
          </Col>
          <Col size="md-6" style="position: absolute; overflow-y: scroll;">
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
            <Jumbotron>
              <h1>User Content</h1>
            </Jumbotron>
          </Col>
          <Col size="md-3">
           <Jumbotron>
            <form>
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="What's Going On?"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Chirp
              </FormBtn>
            </form> 
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
