const Task = require("../models/TaskSchema");
const mongoose = require("mongoose")

//create task
const createTask = async (req, res) => {
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
  }


  //read task
  const readTask = async (req, res) => {
    try {
      const allTask = await Task.find();
      res.status(200).json(allTask);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  //readOneTask
  const readOneTask = async (req, res) => {
    const { id } = req.params;
    try {
      const oneTask = await Task.findById({ _id: id });
      res.status(200).json(oneTask);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  //deleteTask
  const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
      const deteleTask = await Task.findByIdAndDelete({ _id: id });
      res.status(200).json("deleted");
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

//updateTask
  const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
      const updateTask = await Task.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json("updated");
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  module.exports = {createTask, readTask, readOneTask, deleteTask, updateTask}