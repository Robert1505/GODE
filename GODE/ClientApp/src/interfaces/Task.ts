import { IBaseEntity, IUserSpecific } from "./BaseEntity";

export interface Task extends IUserSpecific {
    name: string;
    completed: boolean;
    estimatedTime: number;
    shortDate: string;
    progress: number;
    goalId: string
} 