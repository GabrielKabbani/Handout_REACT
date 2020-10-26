var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projetoNEM');

var userSchema = new mongoose.Schema({username: String, email: String},{collection: 'usercolletion'});

module.exports = {Mongoose: mongoose, UserSchema: userSchema}