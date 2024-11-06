const express = require('express');
const app = express();
const PORT = 3000;

// Sample ToDo list
const todos = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk the dog', completed: true },
    { id: 3, task: 'Do laundry', completed: false },
    { id: 4, task: 'Complete project', completed: true },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Plan vacation', completed: false },
];

// Route to get a ToDo by ID
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'ToDo not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

