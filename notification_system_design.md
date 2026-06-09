# Notification System Design
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