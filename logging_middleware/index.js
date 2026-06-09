import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWh1bC4yM2IwMTIxMDM0QGFiZXMuYWMuaW4iLCJleHAiOjE3ODA5ODU0NjIsImlhdCI6MTc4MDk4NDU2MiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjQwYTNjZjE5LWI5MTctNDQyYS04ZGY5LTMzMzU2N2NjOTM5NiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhaHVsIHJhaSIsInN1YiI6Ijc0M2QxM2ZiLTUwNDMtNDY0OC1hY2U2LTkyYzY0NDA1M2IzZSJ9LCJlbWFpbCI6InJhaHVsLjIzYjAxMjEwMzRAYWJlcy5hYy5pbiIsIm5hbWUiOiJyYWh1bCByYWkiLCJyb2xsTm8iOiIyMzAwMzIwMTIwMTk0IiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiNzQzZDEzZmItNTA0My00NjQ4LWFjZTYtOTJjNjQ0MDUzYjNlIiwiY2xpZW50U2VjcmV0IjoiQXhxeVVETnVrR2FGbUpWRCJ9.QGex8kyv--2BYjmni8IFsAThbcgy3-bWvtOPu7TvF28";

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