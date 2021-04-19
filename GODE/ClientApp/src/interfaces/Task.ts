export interface Task {
    id: string;
    name: string;
    completed: boolean;
    estimatedTime: number;
    shortDate: string;
    progress: number;
    goalId: string
} 