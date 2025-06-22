
// // import axios from '../api/axios';

// // export const registerUser = async (data) => {
// //   const payload = {
// //     fullName: data.fullName,
// //     email: data.email,
// //     phone: data.phone,
// //     password: data.password,
// //   };
  
// //   return axios.post('/api/register', payload);
  
// // };

// // src/services/registerService.js
// import axios from '../api/axios';

// export const registerUser = async (userData) => {
//   const response = await axios.post('/api/register', userData);
//   return response.data;
// };
import apiClient from '../api/apiClient';

export const registerUser = async (payload) => {
  const response = await apiClient.post('/api/register', payload);
  return response.data;
};
