import { Achievement } from "./Achievement";
import { IBaseEntity } from "./BaseEntity";
import { Goal } from "./Goal";
import { Task } from "./Task";

export interface User extends IBaseEntity{
    username: string,
    goalsCompleted: Goal[],
    tasksCompleted: Task[],
    achievements: Achievement[]
}