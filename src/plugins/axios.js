// src/plugins/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Asegúrate de ajustar esto a tu backend
    headers: {
    'Content-Type': 'application/json'
    }
});

export default api;