import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://63f6baa1ab76703b15c3a2a3.mockapi.io/',
});

export default apiService;
