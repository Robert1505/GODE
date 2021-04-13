import { Task } from "./Task";

export interface Goal {
    id: string;
    name: string;
    tasks: Task[]
} 