import axios from 'axios';
import { Progress } from '../interfaces/Progress';

export const addProgress = async (progress: Progress) => {
    const response = await axios.post(
        "https://localhost:44383/api/Progress/add", 
        progress
    );
    return response.data;
}

export const getProgress = async () => {
    const response = await axios.get(
        "https://localhost:44383/api/Progress/get"
    );
    return response.data;
}