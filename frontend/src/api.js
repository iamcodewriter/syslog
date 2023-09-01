// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Update with your backend server URL
});

export const getLogs = async () => {
  try {
    const response = await api.get('/logs');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
