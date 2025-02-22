import {Router} from 'express';     //Here instead of importing the whole express package we only import the Router from package

const todos = [];

const router = Router();

router.get('/', (req,res,next) => {
    res.status(200).json({todos: todos})
})

export default router;      //Here instead of module.eports we do export default so we are saying that only 'router' will be an export of this file