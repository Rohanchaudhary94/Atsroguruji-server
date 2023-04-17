const express = require('express');
require('./db/conn');
const Todo = require('./models/todosModel');
const todos = require('./routes/todosRoute');

const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(todos);


app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})