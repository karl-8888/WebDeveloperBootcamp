const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("OK");
    }) 
    .catch(err => {
        console.log("Error");
        console.log(err);
    })