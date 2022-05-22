import axios from "axios";
//This file consists of the axios instance
//local
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8000",
// });

//docker local
const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
});

//Deployment
// const axiosInstance = axios.create({
//   baseURL: "https://www.backend.inkorea.co",
// });

export default axiosInstance;
