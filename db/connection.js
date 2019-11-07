const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tetherred', {useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log("\n Connected to mongo database\n")
}).catch( err => {
    console.log(err);
});

module.exports = mongoose;