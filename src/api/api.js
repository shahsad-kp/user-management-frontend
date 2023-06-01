import axios from "axios";
import localStorage from "redux-persist/es/storage";
import {useSelector} from "react-redux";

const baseURL = 'http://localhost:8000/api/';

const axiosInstance = axios.create({
  baseURL,
});

// // Add an interceptor to refresh the token when it expires
// api.interceptors.request.use(async (config) => {
//   if (config.url === "/refresh-token") {
//     const res = await api.post("/refresh-token", { refreshToken });
//     // Update the access token in localStorage
//     localStorage.setItem("accessToken", res.data.accessToken);
//     // Set the access token in the request config
//     config.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
//   }
//
//   return config;
// });

// Export the api object
export default axiosInstance;
export { baseURL }
