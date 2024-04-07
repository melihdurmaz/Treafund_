const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    title: { type: String, required: true }  
})


module.exports = mongoose.model('Collection', CollectionSchema)