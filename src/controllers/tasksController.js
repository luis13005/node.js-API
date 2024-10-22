const tasksModel = require('../models/tasksModels')

const getAll = async (request,response) => {

    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks);
};

const createdTask = async (request,response) =>{
    const createTask = await tasksModel.createdTask(request.body);
    return response.status(201).json(createTask);
}

module.exports = {
    getAll,
    createdTask
};