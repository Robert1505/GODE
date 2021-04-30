import axios from 'axios';
import { Goal } from '../interfaces/Goal';

export const getGoals = async () => {
    const response = await axios.get("https://localhost:44383/api/Goal/get");
    return response.data;
}

export const createGoal = async (goal: Goal) => {
    const response = await axios.post(
        "https://localhost:44383/api/Goal/create", 
        goal
    );
    return response.data;
}

export const getGoalsSolvedToday = async() => {
    const response = await axios.get(
      'https://localhost:44383/api/Goal/goalsSolvedToday'
    )
    return response.data;
  }