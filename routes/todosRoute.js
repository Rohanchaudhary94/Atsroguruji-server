const express = require('express');
//1: Create a new router
const router = new express.Router();
const Todo = require('../models/todosModel')


//using async and await method post -> create Task

router.post("/tasks", async (req, res) => {
    try {
      const user = new Todo(req.body);
  
      const createTask = await user.save();
      res.status(201).send(createTask);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  
  //get the indiviual Tasks data using id
  
  router.get('/tasks/:id', async(req, res) =>{
          try {
              const _id = req.params.id;
              
              const tasksData = await Todo.findById(_id);
  
              if(!tasksData){
                  return res.status(404).send();
              }else{
                  res.send(tasksData);
              }
              // res.send(studentData);
          } catch (e) {
              res.status(500).send(e);
          }
  })
  
  
  // Update the Tasks by it id
  
  router.patch('/tasks/:id',async(req,res) => {
      try {
          const _id = req.params.id;
          const updateTasks = await Todo.findByIdAndUpdate(_id, req.body, {
              new : true
          });
          res.send(updateTasks);
      } catch (e) {
          res.status(404).send(e);
      }
  })
  
  // Delete the Tasks by it id
  
  router.delete('/tasks/:id', async(req,res) =>{
         
      try {
          
          const deletetasks = await Todo.findByIdAndDelete(req.params.id);
          if(!req.params.id){
              return res.status(400).send();
          }else{
              res.send(deletetasks);
          }
          
      } catch (e) {
          res.status(500).send(e);
      }
  })
  

module.exports = router;