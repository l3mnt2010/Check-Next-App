import { Data, LoginCredentials, ResRegister } from "@/interface/interface";
import axios, { AxiosResponse } from "axios";
export const API = axios.create({
  baseURL: "https://reqres.in/api",
});

class AuthService {
  async login(credentials: LoginCredentials): Promise<string> {
    try {
      const response: AxiosResponse = await API.post("/login", credentials);
      const token: string = response.data.token;

      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      throw new Error("Failed to login");
    }
  }

  async register(credentials: LoginCredentials): Promise<ResRegister> {
    try {
      const response: AxiosResponse = await API.post("/register", credentials);
      const token: string = response.data.token;
      const id: number = response.data.id;
      localStorage.setItem("res_token", token);
      return { token, id };
    } catch (error) {
      console.log(error);
      throw new Error("Failed to login");
    }
  }
  async logout(): Promise<void> {
    localStorage.removeItem("token");
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");

    return !!token;
  }

  async getUser(id: number): Promise<Data[]> {
    const response = await API.get(`/api/users?page=${id}`);
    return response.data;
  }
}

export default AuthService;
