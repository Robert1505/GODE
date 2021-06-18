import axios from "axios";
import { Goal } from "../interfaces/Goal";

export const getGoals = async (userId: string) => {
  const response = await axios.get(`Goal/get/${userId}`);
  return response.data;
};

export const createGoal = async (goal: Goal, userId: string) => {
  const response = await axios.post(`Goal/create/${userId}`, goal);
  return response.data;
};

export const getGoalsSolvedToday = async (userId: string) => {
  const response = await axios.get(`Goal/goalsSolvedToday/${userId}`);
  return response.data;
};
