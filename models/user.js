const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true ,unique:true},
    email: { type: String, required: true ,unique:true},
    password: { type: String, required: true },
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }]
});

module.exports = mongoose.model('User', UserSchema);