# Notification System Design

# STAGE 1 

## Notification needs
* placement
* Result
* Event
` I am implementing RestApis below`
## API Created
* Get Notification
GET /api/notifications

res
```
{
    "notifications":
}
```
* get notification by id
 GET /api/notifications/:id

* create Notification 
POST /api/notifications

req
```
{
  "type":"a",
  "message":"Hello"
}
```
* Mark as Read
PATCH /api/notifications/:id/read

* Delete Notification
DELETE /api/notifications/:id

## Data Header `application/json` body-raw

## Realtime Commn
  websocket(socket.io)

flow 
Backend -> socket.io -> connected student


## Stage 2

### Database selections

i would use postgreSQL for storing notification data while other NoSql or Sql is good but My reason is well defined structure which help me to establish relations in entity and there query is easy to use .

## Schema I would use are:

### Student 

Column: Field,Type
Rows: id(uuid) ,name(VARCHAR),email(VARCHAR),createdAt

### Notifications Table

Column:Field,Type

Rows: id , uuid
      student_id,UUID
      notification_type,ENUM
      message,text
      is_read,bool
      created_at,timestamp


` student recieve multiple notification 1:M `

* We can also use create indexes on student_id or created_at
* Implement pagination
* history saving

## Example Queries

* Fetch notification
```
SELECT *
FROM notifications
WHERE student_id = 'student-id'
ORDER BY created_at DESC
```
* Unread

```
SELECT *
FROM notifications
WHERE student_id = 'student-id'
AND is_read = false;
```

* mark as read

```
UPDATE notifications
SET is_read = true
WHERE id = 'notification-id';
```

* delete

```
DELETE FROM notifications
WHERE id = 'notification-id';
```





## Components
1. React Frontend
2. Express Backend
3. Logging Middleware
## Flow
```
Frontend -> Backend API

Backend -> Logging Middleware

Backend -> Frontend Response\
```

## Logging
`all api is working `