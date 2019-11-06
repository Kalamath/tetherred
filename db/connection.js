const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tetherredDB", {useNewUrlParser: true})
.then( () => {
    console.log("\n Connected to mongo database\n")
}).catch( err => {
    console.log(err);
});

module.exports = mongoose;