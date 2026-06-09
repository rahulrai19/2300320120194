import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const pageRequests = Array.from({ length: 10 }, (_, i) => fetchNotifications(i + 1, 10));
      const pagesData = await Promise.all(pageRequests);
      const allData = pagesData.flat().filter(Boolean);

      const weight = {
        Placement: 3,
        Result: 2,
        Event: 1,
      };

      const topNotifications = allData
        .map((item) => ({
          ...item,
          score:
            weight[item.Type] * 1000000000000 +
            new Date(item.Timestamp).getTime(),
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      setNotifications(topNotifications);
    } catch (error) {
      console.error("Failed to load priority notifications:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Top 10 Priority Notifications
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mb: 2 }}
      >
        Back
      </Button>

      {notifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            viewed={false}
          />
        )
      )}
    </Container>
  );
}

export default PriorityNotifications;