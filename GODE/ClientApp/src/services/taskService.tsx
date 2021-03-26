import axios from 'axios';
import { Task } from '../interfaces/Task';

export const getTasks = async () => {
    const response = await axios.get("https://localhost:44383/api/Task/get");
    return response.data;
}

export const createTask = async (task: Task) => {
    const response = await axios.post("https://localhost:44383/api/Task/create", task);
    return response.data;
}