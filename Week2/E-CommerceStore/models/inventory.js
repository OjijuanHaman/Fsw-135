const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
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
    },
})

module.exports = mongoose.model("Inventory", inventorySchema)