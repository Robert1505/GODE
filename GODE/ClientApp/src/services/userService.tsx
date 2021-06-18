import axios from "axios";
import { User } from "../interfaces/User";

export const createUser = async (user: User) => {
  const response = await axios.post("User/create", user);
  return response.data;
};

export const getAll = async () => {
  const response = await axios.get("User/getAll");
  return response.data;
};
