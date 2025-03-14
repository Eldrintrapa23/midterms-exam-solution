const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let currentId = 1;

// Create a new task
app.post('/tasks', (req, res) => {
    const { name, description } = req.body;
    const newTask = { id: currentId++, name, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const task = tasks.find(task => task.id == id);
    if (task) {
      task.name = name;
      task.description = description;
      res.json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
});

//deleting a task 
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id == id);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });
  
  // Starting the server on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
