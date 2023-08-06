import axios from 'axios';

const api = axios.create({
  baseURL: 'https://harmoney-api-app-odnadgi3ua-uc.a.run.app/',
});

export default api;
