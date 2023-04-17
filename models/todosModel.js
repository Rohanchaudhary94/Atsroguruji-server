const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['todo', 'inProgress', "done"],
    default: 'todo',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo;