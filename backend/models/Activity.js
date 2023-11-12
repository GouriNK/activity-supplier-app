/**
 * Activity SCHEMA MODEL, as per MongoDB
 **/

const mongoose = require('mongoose');

// SCHEMA
const activitySchema = new mongoose.Schema({
    title : {type: String, required: true},
    currency : {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true, min: 0, max: 5},
    specialOffer: {type: Boolean, required: true},
    supplierId: {type: mongoose.Types.ObjectId, required: true, ref: 'Supplier'}
});

// MODEL
module.exports = mongoose.model('Activity', activitySchema);