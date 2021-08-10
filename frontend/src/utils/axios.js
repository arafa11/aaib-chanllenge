import * as axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

var axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = process.env.REACT_APP_TIMEOUT;
// axiosInstance.defaults.headers.common['locale'] = localStorage.currentLanguage;

export default axiosInstance;