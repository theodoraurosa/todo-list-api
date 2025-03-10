import { z } from "zod";
import { ListTasksUseCase } from "../../use-cases/list-task-use-case";
import { TaskPrismaRepository } from "../../repositories/prisma/task-repository";
import { Request, Response } from "express";


// Validação para Listar Tarefas
const listTaskValidated = z.object({
  filter: z.string().optional(),
  page: z
    .string()
    .transform((val) => parseInt(val, 10))
    .optional()
    .or(z.number()),
  limit: z
    .string()
    .transform((val) => parseInt(val, 10))
    .optional()
    .or(z.number()),
});

export class ListTasksController {
  constructor(private useCase: ListTasksUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      // Validação dos parâmetros da query
      const input = listTaskValidated.parse(req.query);
      console.log({ a: req.query, input });

      // Executa a lógica de listagem de tarefas
      const tasks = await this.useCase.execute(input);

      // Retorna as tarefas com sucesso
      return res.json(tasks);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

// Fábrica do Controlador para Listar Tarefas
export const listTasksFactory = new ListTasksController(
  new ListTasksUseCase(new TaskPrismaRepository())
);
