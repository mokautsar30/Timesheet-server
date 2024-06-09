# Timesheet-server


# API Docs

## TechStack :

- Node JS (Express JS)
- Sequelize ORM
- Postgres SQL
- JWT
- Bcrypt

## Getting Started :

- Clone this repository
- put `JWT_SECRET =ini_secret` in your env
- `npm i`
- set your database configuration in the config folder (development)
- `npx sequelize db:drop`
- `npx sequelize db:create`
- `npx sequelize db:migrate`
- `npx sequelize db:seed:all`
- `npx nodemon 

## Endpoints :

- `POST /login`
- `POST /register`
- `GET /activities`
- `POST /activities`
- `PUT /activities/:id`
- `DELETE /activities/:id`
- `GET /project`
- `POST /project`
- `PUT /project/:id`
- `DELETE /project/:id`

## 1. POST /login

Request :

- body :

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string",
  "id": "integer"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email or Password"
}
```
_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

&nbsp;

## 2. POST /register

Request:

- body:

```json
{
	"username": "string",
	"email": "string",
	"password": "string",
	"name": "string",
	"rate": integer,
    "access": "string" - (default: Employee)
}
```

_Response (201 - Created)_

```json
{
    "id": "integer"
    "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Email format must be an email"
}
OR
{
    "message": "Password is required"
}
OR
{
    "message": "Name is required"
}
OR
{
    "message": "Password must be at least 6 characters long"
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Invalid email/password"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

&nbsp;

&nbsp;

## 3. GET /activities

- Get all activities, only authenticated users with admin/employee privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- query:

```json
{
  "search": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "projectId": 1,
        "userId": 1,
        "activityName": "Meeting",
        "dateStart": "2024-06-10T00:00:00.000Z",
        "dateEnd": "2024-06-10T00:00:00.000Z",
        "timeStart": "09:00:00",
        "timeEnd": "10:00:00",
        "totalPrice": 0,
        "createdAt": "2024-06-07T17:45:26.507Z",
        "updatedAt": "2024-06-07T17:45:26.507Z"
    },
    {
        "id": 2,
        "projectId": 2,
        "userId": 2,
        "activityName": "Development",
        "dateStart": "2024-06-10T00:00:00.000Z",
        "dateEnd": "2024-06-12T00:00:00.000Z",
        "timeStart": "10:00:00",
        "timeEnd": "15:00:00",
        "totalPrice": 180000,
        "createdAt": "2024-06-07T17:45:26.507Z",
        "updatedAt": "2024-06-07T17:45:26.507Z"
    },
  ...,
]
```

&nbsp;

## 4. POST /activities

- Description:
  This endpoint allows an user to create new product. Only users with authentication privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
    {
        "id": integer,
        "projectId": integer,
        "userId": integer,
        "activityName": "string",
        "dateStart": "date",
        "dateEnd": "date",
        "timeStart": "time",
        "timeEnd": "time",
        "totalPrice": integer, (default: 0)
        "createdAt": new Date,
        "updatedAt": new Date
    },
```

_Response (201 - Created)_

```json
    {
        "id": 2,
        "projectId": 2,
        "userId": 2,
        "activityName": "Development",
        "dateStart": "2024-06-10T00:00:00.000Z",
        "dateEnd": "2024-06-12T00:00:00.000Z",
        "timeStart": "10:00:00",
        "timeEnd": "15:00:00",
        "totalPrice": 180000,
        "createdAt": "2024-06-07T17:45:26.507Z",
        "updatedAt": "2024-06-07T17:45:26.507Z"
    },
```

_Response (400 - Bad Request)_

```json
{
  "message": "Activities name is required"
}
OR
{
  "message": "Date Start must be a valid date"
}
{
  "message": "Date End must be a valid date"
}
OR
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

&nbsp;

## 5. PUT /activities/:id

Description:

- Update activities by id, only users with authentication privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success update activities by id ${id}"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. DELETE /activities/:id

Description:

- Delete activities by id, only users with authentication privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success delete activies by id ${id}"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 7. GET /project

- Get all projects, only authenticated users with admin/employee privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- query:

```json
{
  "search": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "projectName": "UI/UX",
        "status": true,
        "createdAt": "2024-06-07T17:45:26.501Z",
        "updatedAt": "2024-06-07T17:45:26.501Z"
    },
    {
        "id": 2,
        "projectName": "Dokumentasi",
        "status": true,
        "createdAt": "2024-06-07T17:45:26.501Z",
        "updatedAt": "2024-06-07T17:45:26.501Z"
    },
  ...,
]
```

&nbsp;

## 8. POST /project

- Description:
  This endpoint allows an user to create new project. Only users with authentication privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
    {
        "id": integer,
        "projectName": "string",
        "status": boolean,
        "createdAt": new Date,
        "updatedAt": new Date
    },
```

_Response (201 - Created)_

```json
    {
        "id": 2,
        "projectName": "Dokumentasi",
        "status": true,
        "createdAt": "2024-06-07T17:45:26.501Z",
        "updatedAt": "2024-06-07T17:45:26.501Z"
    },
```

_Response (400 - Bad Request)_

```json
{
  "message": "Project name is required"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

&nbsp;

## 9. PUT /project/:id

Description:

- Update projects by id, only users with authentication privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success update project by id ${id}"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 10. DELETE /project/:id

Description:

- Delete project by id, only users with authentication privileges can access this feature.

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success delete project by id ${id}"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email / password"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```