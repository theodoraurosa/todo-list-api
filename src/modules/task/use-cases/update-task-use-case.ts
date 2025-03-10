import { Prisma, Task } from "@prisma/client";
import { ITaskRepository } from "../repositories/task-repository.interface";

export class UpdateTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}
  
    async execute(id: string, input: Prisma.TaskUpdateInput): Promise<Task> {
      return await this.taskRepository.update({ id, ...input });
    }
  }