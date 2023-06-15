const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const tasks = [];

// Display the to-do list
app.get('/', (req, res) => {
  res.render('index', { tasks });
});

// Add a new task
app.post('/add', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/');
});
