import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "Application/JSON",
      Authorization: `${token}`,
    },
  });
};
