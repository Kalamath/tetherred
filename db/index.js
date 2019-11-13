//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port
const localURI = 'mongodb://localhost:27017/tetherredDB' 

mongoose.connect(process.env.MONGODB_URI || localURI, {useNewUrlParser: true})
.then( () => { 

    console.log('Connected to Mongo');
        
    }).catch ( err => {
       
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        });
  
module.exports = mongoose.connection