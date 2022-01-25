const mongoose = require('mongoose');
mongoose
    .connect(
        config.get('mongoURI'),
    {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log("Connected to MongoDB..."))
    .catch((err)=> console.log(`Could not connect to MongoDB. Error: ${err}`));