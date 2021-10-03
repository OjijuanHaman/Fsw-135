const mongoose = require("mongoose")
const schema = mongoose.Schema

const inventorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required:true,
        min: 0
    }
})

module.exports = mongoose.model('InventoryModel', inventorySchema)