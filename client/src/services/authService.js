import axios from 'axios';

const API_URL = 'https://ey-news-app-server.onrender.com/api/auth';

export const signup = (data) => axios.post(`${API_URL}/signup`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
export const verifyToken = (token) => axios.get(`${API_URL}/protected`, {
  headers: { Authorization: token },
});
