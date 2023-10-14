import axios from "axios";
import { AuthT } from "../types/types";
import { BASE_URL } from "../config/config";

const register = async (payload: AuthT) => {
  await axios.post(`${BASE_URL}/register`, payload);
};

const login = async (payload: AuthT) => {
  const response = await axios.post(`${BASE_URL}/login`, payload);

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const forgotPassword = async (email: string) => {
  await axios.post(`${BASE_URL}/send_password_rest_link`, { email });
};

const resetPassword = async (password: string, userId: string) => {
  await axios.post(`${BASE_URL}/reset_password/${userId}`, { password });
};

const googleAuth = async (email: string) => {
  const response = await axios.post(`${BASE_URL}/google_auth`, { email });

  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authServices = {
  register,
  login,
  forgotPassword,
  resetPassword,
  googleAuth,
  logout,
};

export default authServices;
