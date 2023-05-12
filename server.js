const express = require("express");
require("dotenv").config();
const app = express();
const dbConnect = require("./config/db");
const { findById } = require("./models/TaskSchema");
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")

// const mongoose = require("mongoose")

const {createTask, readTask, readOneTask, deleteTask, updateTask} = require("./Controllers/Task")

//middleware
app.use(express.json());
app.use(cors())

app.use(authRoutes)

//create task
app.post("/create", createTask);

// read task
app.get("/tasks", readTask);

//get one task
app.get("/tasks/:id", readOneTask);

//delete task
app.delete("/tasks/:id", deleteTask);

//update task
app.put("/tasks/:id", updateTask);




//port to listen
const port = process.env.PORT || 5005;

dbConnect()
  .then(() => {
    app.listen(port, (req, res)=>{
console.log(`Serve is running on ${port} and DB connected`)
    })
  })
  .catch((error) => {
    console.log(error.message);
  });
