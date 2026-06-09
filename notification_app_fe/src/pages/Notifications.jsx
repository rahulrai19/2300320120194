import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [viewed, setViewed] = useState({});

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  const loadNotifications = async () => {
    try {
      const data = await fetchNotifications(page, 10, type);
      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  };

  const markViewed = (id) => {
    setViewed((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Type</InputLabel>

          <Select
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="Event">
              Event
            </MenuItem>

            <MenuItem value="Result">
              Result
            </MenuItem>

            <MenuItem value="Placement">
              Placement
            </MenuItem>
          </Select>
        </FormControl>

        <Button
          component={Link}
          to="/priority"
          variant="contained"
        >
          Priority Notifications
        </Button>
      </Stack>

      {notifications.map((notification) => (
        <div
          key={notification.ID}
          onClick={() =>
            markViewed(notification.ID)
          }
        >
          <NotificationCard
            notification={notification}
            viewed={viewed[notification.ID]}
          />
        </div>
      ))}

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Button
          variant="outlined"
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Previous
        </Button>

        <Button
          variant="outlined"
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </Button>
      </Stack>
    </Container>
  );
}

export default Notifications;