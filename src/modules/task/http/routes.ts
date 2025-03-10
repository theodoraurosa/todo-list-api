import { Request, Response, Router } from 'express';
import { createTaskFactory } from './controllers/create-task.controller';
import { listTasksFactory } from './controllers/list-task.controller';
import { getTaskFactory } from './controllers/get-task.controller';
import { deleteTaskFactory } from './controllers/delete-task.controller';



const router = Router();

// Definindo as rotas
    router.post('/tasks', (req:Request, res:Response) => {createTaskFactory.handle(req, res)}); 
    router.get('/tasks',  (req:Request, res:Response) => {listTasksFactory.handle(req, res)});  
    router.get('/tasks/:id', (req:Request, res:Response) => {getTaskFactory.handle(req, res)});
    router.delete('/tasks/:id', (req:Request, res:Response) => {deleteTaskFactory.handle(req, res)});  
export default router;
