import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/', 
  timeout: 10000,
});

// Attach token automatically
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken'); // adjust your token key
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Reusable API methods
const apiService = {
  get: async (endpoint, params = {}) => {
    try {
      const res = await api.get(endpoint, { params });
      return res.data;
    } catch (err) {
      throw err.response?.data || { error: 'Network Error' };
    }
  },

  post: async (endpoint, data = {}) => {
    try {
      const res = await api.post(endpoint, data);
      return res.data;
    } catch (err) {
      throw err.response?.data || { error: 'Network Error' };
    }
  },

  put: async (endpoint, data = {}) => {
    try {
      const res = await api.put(endpoint, data);
      return res.data;
    } catch (err) {
      throw err.response?.data || { error: 'Network Error' };
    }
  },

  delete: async (endpoint, params = {}) => {
    try {
      const res = await api.delete(endpoint, { params });
      return res.data;
    } catch (err) {
      throw err.response?.data || { error: 'Network Error' };
    }
  },
};

export default apiService;
