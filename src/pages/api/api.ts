import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/api",
});

export const fetchDataFromAPI = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default API;
