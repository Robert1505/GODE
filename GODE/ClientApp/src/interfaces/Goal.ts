import { IUserSpecific } from "./BaseEntity";
import { Task } from "./Task";

export interface Goal extends IUserSpecific {
    name: string;
    completed: boolean;
    important: boolean;
    tasks: Task[]
} 