import axios from "axios";
import { Progress } from "../interfaces/Progress";

export const addProgressToDate = async (progress: Progress) => {
  const response = await axios.post("ProgressOnDate/add", progress);
  return response.data;
};

export const getProgressOnDate = async (model: { date: Date }) => {
  const response = await axios.post("ProgressOnDate/get", model);
  return response.data;
};

export const getDailyInformation = async (model: {
  date: Date;
  userId: string;
}) => {
  const response = await axios.post(
    `ProgressOnDate/getDailyInformation/${model.userId}`,
    model
  );
  return response.data;
};


export const getWeeklyInformation = async (model: {
  date: Date;
  userId: string;
}) => {
  const response = await axios.post(
    `ProgressOnDate/getWeeklyInformation/${model.userId}`,
    model
  );
  return response.data;
};
