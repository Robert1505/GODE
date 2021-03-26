export interface Task {
    id: string;
    name: string;
    completed: boolean;
    estimatedTime: number;
    progress: number;
    goalId: string
}