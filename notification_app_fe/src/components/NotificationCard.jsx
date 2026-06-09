import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ notification, viewed }) {
  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: viewed ? "#fff" : "#e3f2fd",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;