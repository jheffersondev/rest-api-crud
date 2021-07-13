# EXPRESS CRUD API
A simple API to user management based on CRUD operations.<br>
With this API you can create, read, update and delete users from a MySQL database.

The following packages dependencies is need to run the server: 
 - [Express](https://yarnpkg.com/package/express)
 - [Sequelize](https://yarnpkg.com/package/sequelize)
 - [mysql2](https://yarnpkg.com/package/mysql2)
 - [Cors](https://yarnpkg.com/package/cors)
 - [Dotenv](https://yarnpkg.com/package/dotenv)

# Database models structure
 We're using MySQL Database to keep it most simple as possible
 > More details about models can see in `src/models` folder

 ## User
  - id
  - email
  - password
  - name
  - phone
  - createdAt
  - updatedAt

# How to start
## 1. Define your database access
 Before start server you need to set up your local database access, to do it you need to change the `.env` file located at root of the project.

## 2. Install package dependencies and run:
 Run the following lines on your terminal
 ``` 
 # Install packages dependences
 yarn install 

 # Start server 
 yarn run server
 ```

 ## 3. Local access and how you can change it
 ### 3.1 Local accessing
 After installing the dependencies and start your server, the API will be running at port `3000`<br/>
> http://localhost:3000 


  ### 3.2 Change API settings
  To change API settings you can access `.env` file at root project directory and make your needed changes, save that changes, and restart the server.
<br>
<br>

# Endpoints
**Fetch Users**
----
  Returns json data about all users

* **URL**

  /users

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    `{ 
        users :  [{
            "id": 6,
            "name": "Jhon",
            "phone": "+55 83 98833-55511",
            "email": "Jhon@gmail.com",
            "password": " abcde123",
            "createdAt": "2021-03-22T14:05:43.000Z",
            "updatedAt": "2021-03-23T03:07:04.000Z"
        }, ...]
    }`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error: "Could not fetch users" }`


* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
<br>

**Fetch User**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "user": {
        "id": 8,
        "name": "asfasfas",
        "phone": "fasfasfas",
        "email": "fasfas     fasfasabcd@gmail.com",
        "password": " fasfasfasfasfasfas",
        "createdAt": "2021-03-23T03:49:38.000Z",
        "updatedAt": "2021-03-23T03:49:56.000Z"
    } }`
 
* **Error Response:**

  * **Code:** 400 INVALID PARAMS <br />
    **Content:** `{ error: "invalid params" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error: "Could not find user" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error: "Could not fetch user" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
<br>


**Create User**
----
  Create a user and store in database.

* **URL**

  /users

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  (JSON) <br />
  email, name, phone, password

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message:"User created" }`
 
* **Error Responses:**

  * **Code:** 400 INVALID PARAMS <br />
    **Content:** `{ error: "invalid params" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error: "Could not create user" }`

  OR

  * **Code:** 406 NOT ACCEPTABLE <br />
    **Content:** `{ error: "Email already exists" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users",
      dataType: "json",
      type : "POST",
      data: {email: email, password: password, name: name, phone: phone}
      success : function(r) {
        console.log(r);
      }
    });
  ```
<br>


**Update User**
----
  Update user information identified by ID

* **URL**

  /users/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  (JSON) <br />
  email, name, phone, password

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: "User details updated" }`
 
* **Error Response:**

  * **Code:** 400 INVALID PARAMS <br />
    **Content:** `{ error: "invalid params" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error: "Could not update user" }`

  OR
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error: "Could not find user" }`

  OR

  * **Code:** 406 NOT ACCEPTABLE <br />
    **Content:** `{ error: "Email already exists" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  <br>


**Delete User**
----
  delete user info from database identified by ID

* **URL**

  /users/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: "User deleted" }`
 
* **Error Response:**

  * **Code:** 400 INVALID PARAMS <br />
    **Content:** `{ error: "invalid params" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error: "Could not delete user" }`

  OR
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error: "Could not find user" }`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  <br>
