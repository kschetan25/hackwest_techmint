// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/mapcords');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/mapcords');

// Return router
module.exports = router;