import { Task } from "@prisma/client";
import { ITaskRepository } from "../repositories/task-repository.interface";


export class GetTaskUseCase {
    constructor(private taskRepository: ITaskRepository) {}
  
    async execute(id: string): Promise<Task | null> {
      return await this.taskRepository.findById(id);
    }
  }