// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var mapSchema = new mongoose.Schema({
    lat: String,
    lng: String
});

// Return model
module.exports = restful.model('MapCords', mapSchema);