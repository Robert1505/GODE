import axios from "axios";
import { Task } from "../interfaces/Task";

export const getTasks = async (userId: string) => {
  const response = await axios.get(`Task/get/${userId}`);
  return response.data;
};

export const createTask = async (task: Task, userId: string) => {
  const response = await axios.post(`Task/create/${userId}`, task);
  return response.data;
};

export const addProgress = async (model: {
  taskId: string;
  minutes: number;
}, userId: string) => {
  const response = await axios.post(`Task/addProgress/${userId}`, model);
  return response.data;
};

export const markAsCompleted = async (taskId: string, userId: string) => {
  const response = await axios.post(`Task/markAsCompleted/${taskId}/${userId}`);
  return response.data;
};

export const getTasksSolvedToday = async (userId: string) => {
  const response = await axios.get(`Task/tasksSolvedToday/${userId}`);
  return response.data;
};
