const express = require("express");
require("dotenv").config()
const app = express();
const dbConnect = require("./config/db");
const Task = require("./models/TaskSchema");

//middleware
app.use(express.json());

//create task
app.post("/create", async (req, res) => {
  try {
    const { title, desc, date } = req.body;
    if (!title || !desc || !date) {
      throw new error("All field required");
    }

    const newTask = await Task.create({
      title,
      desc,
      date,
    });

    res.status(200).json(newTask);
  } catch (error) {
    res.status(402).json(err.message);
  }
});

// read task
app.get("/tasks", async (req, res)=>{
    try {
        const allTask = await Task.find()
        res.status(200).json(allTask)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//get one task
app.get("/tasks/:id", async (req,res)=>{
    const {id} = req.params;
    try {
        const oneTask = await Task.findById({_id:id})
        res.status(200).json(oneTask)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

//delete task
app.delete("/tasks/:id", async (req, res)=>{
const {id} = req.params;
try {
    const deleteTask = await Task.findByIdAndDelete({_id:id})
    res.status(200).json("deleted")
} catch (error) {
    res.status(400).json(error.message)
}
})

//update task
app.put("/tasks/:id", async (req, res)=>{
const {id} = req.params;
try {
    const updateTask = await Task.findByIdAndUpdate(id, {$set: req.body })
    res.status(200).json("updated")
} catch (error) {
    res.status(400).json(error.message)
}
})


//port to listen
const port = process.env.PORT || 5005;

dbConnect()
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`Serve is running on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
