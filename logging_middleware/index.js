import axios from "axios";

const token = process.env.ACCESS_TOKEN || "";

async function testLog() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: "backend",
        level: "info",
        package: "controller",
        message: "Notificatin rec"
      },
      {
        headers: {
          Authorization:`Bearer token ${token}`
        }
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data||error.message);
  }
}

testLog();