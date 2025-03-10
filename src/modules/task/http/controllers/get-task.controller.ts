
import { Request, Response } from 'express';
import { z } from 'zod';
import { GetTaskUseCase } from '../../use-cases/get-task-use-case';
import { TaskPrismaRepository } from '../../repositories/prisma/task-repository';

// Validação para Obter Tarefa por ID
const getTaskValidated = z.object({
  id: z.string(),
});

export class GetTaskController {
  constructor(private useCase: GetTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      // Validação do parâmetro `id` na URL
      const input = getTaskValidated.parse(req.params);
      
      // Executa a lógica de obtenção da tarefa por ID
      const task = await this.useCase.execute(input.id);
      
      
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      
      return res.json(task);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

// Fábrica do Controlador para Obter Tarefa por Id
    export const getTaskFactory = new GetTaskController(
         new GetTaskUseCase(new TaskPrismaRepository())
);
