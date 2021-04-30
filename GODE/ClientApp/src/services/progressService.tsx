import axios from "axios";
import { Progress } from "../interfaces/Progress";

export const addProgressToDate = async (progress: Progress) => {
  const response = await axios.post(
    "https://localhost:44383/api/ProgressOnDate/add",
    progress
  );
  return response.data;
};

export const getProgressOnDate = async (model: { date: Date }) => {
  const response = await axios.post(
    "https://localhost:44383/api/ProgressOnDate/get",
    model
  );
  return response.data;
};

export const getDailyInformation = async (model: {date: Date}) => {
  const response = await axios.post(
    "https://localhost:44383/api/ProgressOnDate/getDailyInformation",
    model
  );
  return response.data;
}