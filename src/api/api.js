import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';
const imageBaseUrl = 'http://localhost:8000'

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
    baseURL: baseURL, // Replace with your API base URL
});

// Add an interceptor to set the Authorization header with the access token
axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
});

// Add an interceptor for token refresh
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return axiosInstance
                .post('api/token/refresh/', {refresh: localStorage.getItem('refreshToken')})
                .then((res) => {
                    const {accessToken, refreshToken} = res.data;

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);

                    originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                    return axiosInstance(originalRequest);
                })
                .catch((error) => {
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    console.error('Token refresh error:', error);
                });
        }

        // Return any other error as-is
        return Promise.reject(error);
    }
);

export default axiosInstance;
export {baseURL, imageBaseUrl};
