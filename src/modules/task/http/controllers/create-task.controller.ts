import { z } from "zod";
import { CreateTaskUseCase } from "../../use-cases/create-task-use-case";
import { TaskPrismaRepository } from "../../repositories/prisma/task-repository";
import { Request, Response } from "express";



// Validação para Criar Tarefa
const createTaskValidated = z.object({
  title: z.string(),
  category: z.string(),
});

export class CreateTaskController {
  constructor(private useCase: CreateTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const input = createTaskValidated.parse(req.body);  // Validação do corpo da requisição
      const task = await this.useCase.execute(input);      // Execução da lógica de criação da tarefa
      return res.status(201).json(task);                    // Enviar a resposta com o status de criação
    } catch (error:any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

// Fábrica do Controlador para Criar Tarefa
export const createTaskFactory = new CreateTaskController(
  new CreateTaskUseCase(new TaskPrismaRepository())  // Ajuste conforme a sua implementação
);
