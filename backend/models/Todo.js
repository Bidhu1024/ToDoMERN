const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model('Todo',TodoSchema);
module.exports = Todo
