import { z } from "zod";
import { Request, Response } from "express";
import { TaskPrismaRepository } from "../../repositories/prisma/task-repository";
import { DeleteTaskUseCase } from "../../use-cases/delete-task-use-case";





const deleteTaskValidated = z.object({
  id: z.string(),
});

export class DeleteTaskController {
  constructor(private useCase: DeleteTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      // Validação do parâmetro `id` na URL
      const input = deleteTaskValidated.parse(req.params);

      // Executa a lógica de deleção da tarefa
      await this.useCase.execute(input.id);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}


export const deleteTaskFactory = new DeleteTaskController(
  new DeleteTaskUseCase(new TaskPrismaRepository())
);
