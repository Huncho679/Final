const express = require('express');
const cors = require('cors');
const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;