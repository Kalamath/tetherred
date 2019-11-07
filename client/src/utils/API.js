import axios from "axios";

export default {
    // Get ALL books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Get books with ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Delete a book
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    },
    // Save a book
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    }
};