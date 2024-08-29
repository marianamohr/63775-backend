const mongoose = require('mongoose');

const collection = 'users';

const schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    }
});

const userModel = mongoose.model(collection, schema)

module.exports = userModel