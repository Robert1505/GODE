import { Task } from "./Task";

export interface Goal {
    id: string;
    name: string;
    completed: boolean;
    important: boolean;
    tasks: Task[]
} 