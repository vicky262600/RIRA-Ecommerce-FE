import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGUxYzMxNzBkM2M4OTAzYjg4NmZjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxOTg1MTk1MCwiZXhwIjoxNzIwMTExMTUwfQ.KSDrBPE9gTClaeLXgHZ5YqrIp-VkYRQKFuvqLeqLJMA";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` }
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});