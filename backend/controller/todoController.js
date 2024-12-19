const Todo = require('../models/Todo.js');

// Get all TODOs
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new TODO
const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a TODO
const updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a TODO
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export all functions as an object
module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
