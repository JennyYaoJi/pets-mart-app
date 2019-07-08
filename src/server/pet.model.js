const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pet = new Schema({
    pet_name: {
        type: String
    },
    pet_type: {
        type: String
    },
    pet_description: {
        type: String
    }
});

module.exports = mongoose.model('Pet', Pet);