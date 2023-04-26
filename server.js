const express = require("express");
require("dotenv").config()
const app = express();
const dbConnect = require("./config/db");
const Task = require("./models/TaskSchema");

//middleware
app.use(express.json());

//routes
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



// create port
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
