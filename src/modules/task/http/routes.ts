import { Request, Response, Router } from 'express';
import { createTaskFactory } from './controllers/create-task.controller';



const router = Router();

// Definindo as rotas
router.post('/tasks', 
    (req:Request, res:Response) => {createTaskFactory.handle(req, res)});  // Rota para criar tarefa


export default router;
