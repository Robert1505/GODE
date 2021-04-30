import axios from 'axios';
import {Achievement} from '../interfaces/Achievement'

export const getAchievement = async () => {
    const response = await axios.get("https://localhost:44383/api/Achievement/getAchievements");
    return response.data;
}
