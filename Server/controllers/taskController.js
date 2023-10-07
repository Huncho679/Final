const TaskUser = require('../models/taskUserModel');
const Task = require('../models/taskModel');


exports.getTasks = async (req, res) => {
    const name = req.query.userName;


    const user = await TaskUser.findOne({userName: name});


    if(user === null) {
        return res.status(404).send({message: 'This user does not exist!'})
    }

    return res.status(200).send(user);
}

exports.createTask = async (req, res) => {
    const { title, duration, complete, description, name } = req.body;
    
    const user = await TaskUser.findOne({userName: name });

    if(user === null) {
        return res.status(400).send({message: 'This user does not exist!'})
    }

    let newID;

    if (user.tasks.length === 0) {
        newID = 1;
    } else {
        newID = user.tasks[user.tasks.length - 1].customID + 1;
    }


    const newTask = new Task({
        customID: newID,
        title,
        duration,
        complete,
        description,
    })

    user.tasks = [...user.tasks, newTask];
    const result = await user.save();
    return res.status(201).send(result);
}

exports.deleteTask = async (req, res) => {
    const name = req.query.user;
    const id = Number(req.query.id);

    const user = await TaskUser.findOne({userName: name });

    if(user === null) {
        return res.status(404).send({message: 'This user does not exist!'})
    }

     const updatedUserTasks = user.tasks.filter(task => {
         return task.customID !== id;
     });

     if (updatedUserTasks.length === user.tasks.length) {
        return res.status(500).send({message: "This task doesn't exist! It can't be deleted..."});
     }

    user.tasks = updatedUserTasks;
    await user.save();
    res.status(200).send('Task deleted successfully!');
}

exports.updateTask = async (req, res) => {
    const {name, id} = req.body;
    const user = await TaskUser.findOne({userName: name});
    
    if(user === null) {
        return res.status(404).send({message: 'This user does not exist!'})
    }

    const taskToUpdate = user.tasks.find(task => task.customID === id);

    if(taskToUpdate === undefined) {
        return res.status(500).send({message: "This task does not exist! It can't be completed..."})
    }

    taskToUpdate.complete = !taskToUpdate.complete;

    const result = await user.save();

    return res.send(result);
}