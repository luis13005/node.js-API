const connection = require('./connection');

const getAll = async () =>{
const [tasks] = await connection`SELECT * FROM todolist`;
console.log(tasks);
return tasks;
};

const createdTask = async (task) =>{

    const {list_title} = task;
    const status = "Pendente";

    const dateUTC = new Date(Date.now()).toUTCString();
    console.log(list_title);
    console.log(status);
    console.log(dateUTC);
    const createTask = await connection`INSERT INTO todolist (list_title,list_status,list_inc_em) values (${list_title},${status},${dateUTC})`;
    console.log(createTask);
    return {insertId: createTask.insertId};
    };

module.exports = {
getAll,
createdTask
};