const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
title : {
    type: String,
    required: true,
},
desc : {
    type: String,
    required: true,
},
date : {
    type: String,
    required: true,
}
})

module.exports = mongoose.model("Task", TaskSchema)