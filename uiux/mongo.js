const mongoose = require("mongoose");

const url= "mongodb://0.0.0.0:27017/UItoUX";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  };
  mongoose.connect(url, options)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application logic here
  })
  .catch((error) => {
    console.error('Failed to conect to MongoDB:', error);
  });
