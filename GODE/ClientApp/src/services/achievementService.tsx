import axios from 'axios';

export const getAchievement = async () => {
    const response = await axios.get("Achievement/getAchievements");
    return response.data;
}

export const getUserAchievements = async (userId : string) => {
    const response = await axios.get(`Achievement/getUserAchievements/${userId}`);
    return response.data;
}
