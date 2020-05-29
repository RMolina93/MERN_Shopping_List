// First we load the express library for doing all the routing and the API
const express = require('express');
// Mongoose is our connection to the MongoDB
const mongoose = require('mongoose');
//Body Parser manage the requests.
const bodyParser = require('body-parser');

const items = require('./routes/api/items');



const app = express();  //We initialize our app like with Flask app=flask()

//BodyParser Middleware
// By using this, we make that our app only look at requests which has in the header that are JSON type.
app.use(bodyParser.json());

// Connection to MongoDB.
// We require the file. Since the file already exports an object, we can access the characteristics of the object.
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })    //This function of Mongoose is promised based, so we use the methods then and catch, to describe what happens if: The method works correctly / The method does not works correctly.
    .then( () => console.log("MongoDB connected..."))  //Since it went correctly, there is no callback, so there is no need to pass arguments.
    .catch(err => console.log(err)); // Since it failed, it return an error callback that we can use as a parameter of the arrow function.

// Use routes (Middleware)
app.use('/api/items', items)  //Here we are saying that anything that hits /api/items, should use the items variable, which is the variable the contains the routes of the api.

const port = process.env.PORT || 5000 //Connect to the port defined in Heroku environment OR port 5000.

app.listen(port, () => console.log(`Server started on port ${port}`)) // We generate the server, using the port argument, and a function argument as callback. In our case, our function callback is a console.log