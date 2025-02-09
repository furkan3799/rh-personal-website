import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/auth`, {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        return response.data;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuthenticated() {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (error) {
      return false;
    }
  }
}

export default new AuthService();
