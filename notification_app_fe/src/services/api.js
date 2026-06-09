import axios from "axios";

const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  let url = `/evaluation-service/notifications?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data.notifications;
};