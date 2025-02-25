"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Here instead of importing the whole express package we only import the Router from package
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
        //text: req.body.text  //req.body or req.params are by default of type any thats why we use RequestParams and RequestBody
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    console.log("tid type of :", typeof tid);
    const todoIndex = todos.findIndex(todoItem => String(todoItem.id) === String(tid));
    console.log("todos id Type : ", typeof todos[0].id);
    console.log(todoIndex);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated Todo', todos });
    }
    res.status(404).json({ message: 'Id does not Exist' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== tid);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router; //Here instead of module.eports we do export default so we are saying that only 'router' will be an export of this file
