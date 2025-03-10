

import { Request, Response } from 'express';
import { z } from 'zod';
import { UpdateTaskUseCase } from '../../use-cases/update-task-use-case';
import { TaskPrismaRepository } from '../../repositories/prisma/task-repository';

// Validação para Atualizar Tarefa
const updateTaskValidated = z.object({
  title: z.string().optional(),
  listname: z.string().optional(),
  completed: z.boolean().optional(),
  category: z.string().optional(),
});

export class UpdateTaskController {
  constructor(private useCase: UpdateTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      // Valida o corpo da requisição para atualizar a tarefa
      const input = updateTaskValidated.parse(req.body);
      console.log({input,b: req.body});
      
      // Executa a lógica de atualização da tarefa
      const task = await this.useCase.execute(req.params.id, input);
      return res.json(task);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

// Fábrica do Controlador para Atualizar Tarefa
export const updateTaskFactory = new UpdateTaskController(
  new UpdateTaskUseCase(new TaskPrismaRepository())
);
