/**
 * Supplier SCHEMA MODEL, as per MongoDB
 **/

const mongoose = require('mongoose');

// SCHEMA
const supplierSchema = new mongoose.Schema({
    name : {type: String, required: true},
    address : {type: String, required: true},
    zip: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true}
});

// MODEL
module.exports = mongoose.model('Supplier', supplierSchema);