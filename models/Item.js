//Let's create an item model for the MongoDB 

// First we import the mongoose library since its needed for the creation of schema.
const mongoose = require('mongoose');

// And we import the function schema of mongoose, which will let us generate an schema of the object.
const Schema = mongoose.Schema;

//Now we create the Schema of the object, by putting new Schema, and add the attributes. Inside of each attribute we have to indicate the type of the variable, and we can put if its required, or a default value.
const ItemSchema = new Schema(
    {
        name: {type: String, required: true},

        date: {type: Date, default: Date.now}
    });

// We want to map this schema to a model in the MongoDB
const Item = mongoose.model('item', ItemSchema);

//And we export the variable Item since we want to access it from outside.
module.exports = Item;