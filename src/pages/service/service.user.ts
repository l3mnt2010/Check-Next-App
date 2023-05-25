import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/api",
});

export const loginApi = (email: string, password: string) => {
  try {
    return API.post("/login", { email, password });
  } catch (e) {
    console.log(e);
    return 0;
  }
};
