const express = require('express');
const router = express.Router();

// Bring in our item model since we are going to use it in diferent endpoints.
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public

// We don't put /api/items because this file is reached when the main script receives a request with api/items, so it is already accounted.
router.get('/', (req, res) => {
    // The function get takes two arguments. First is the route endpoint. Second is the function activated when the route is requested, so we use
    // an arrow function (params) => {function} 

    // We want to check all the models 
    Item.find() // Function find is a promise based, so we use then and catch. Since there is no error possible (even if its an empty array we don't use Catch.)
        // Since find has no arguments inside it, it retrieves all the possible results.
        .sort({ date: -1 }) // What we would use is a sort method for the MODEL in mongoose, and sort by the parameter date. 
        .then(items => res.json(items)) // Finally, we say that the value items that returns, is converted in a response , to json.
});

// @route POST api/items
// @desc Create a ITEM
// @access Public

router.post('/', (req, res) => {
    // First we need to create a new Item object based on the Item class. 
    const newItem = new Item({
        // And the arguments that take that Item object is another object with the attributes of the instance.
        name: req.body.name //The name of the item is in the body of the post request. Remember that the header only indicated the type of request.
        // We can access to the body to the request thanks to the body-parser module.
    });
    //Now we want to save that object in the database
    newItem.save() //This is promise based as well
        .then(item => res.json(item)) //We want to take the item, and return a response of that item in json.
});

// @route DELETE api/items/:id
// @desc Delete an ITEM
// @access Public

router.delete('/:id', (req, res) => {

    Item.findById(req.params.id)
        .then( item => item.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
});


module.exports = router;