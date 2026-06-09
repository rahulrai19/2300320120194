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
---

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
---

## Stage 3

## Database Optimizations
ans:-

The query is correct fetches unread notifications for a student but and sort them by creation time

## Reason slow

The system now contains 50000 student and 5000000 notifications , 

without proper indexing the database may need to scan a very large number of row before.

sorted operation on created_at can also become expensive if many duplicate notification arrived

## optimization ans

i would create a composite index,
```
CREATE INDEX idx_notifications_student_read_created
ON notifications(student_id, is_read, created_at);
```

This index helps because the query filters using:
- student_id
- is_read

and sorted on created_at


The database can directly use the index instead of scanning and sorting

## Complexity 

without index : O(N)
with index : O(logN) faster

Adding index at every index is not ideal 
- storage need increases
- slow insert,update etc
- maintanance cost

## Query question ans 
```
SELECT DISTINCT student_id
FROM notifications
WHERE notification_type = 'Placement'
AND created_at >= NOW() - INTERVAL '7 days';
```
---

## Stage 4

To improve performance for million of user i will apply system designing where i use redis for cache 

cache is instance storage where the notification is stored and used frequently when needed from the user side instead o calling database frequently 

i would implement the following also 
- pagination
- websocket
- cache invalidation











