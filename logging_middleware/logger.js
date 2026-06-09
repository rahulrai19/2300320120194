import axios from "axios";

let token = process.env.ACCESS_TOKEN || "";

export const setToken = (accessToken) => {
  token = accessToken;
};

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log(
      error.response?.data || error.message
    );
  }
};