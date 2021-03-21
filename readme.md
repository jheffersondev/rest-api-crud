# USER REST API - CRUD
A simple Rest Api to user management based on CRUD operations.<br>
With this application you can: create, read, update and delete users.ons.
<br/>
<br/>

# Database models structure
 We're using Mysql Database to keep it most simple as possible
 > More details about models can see in `src/models` folder

 ## User
  - id
  - email
  - password
  - name
  - phone
  - createdAt
  - updatedAt

 ## Admin
  - id
  - username
  - password
  - createdAt
  - updatedAt

<br>
<br>

# How to setup
## Run the following lines on your terminal::
 ``` 
 # Install packages dependences
 yarn install 

 # Start server 
 yarn run server
 ```

 ## Local access and how you can change it
 ### Local accessing
 After installing the dependencies and start your server, the API will be running at port `3000`<br/>
> http://localhost:3000 


  ### Change API settings
  To change API settings you can access `.env` file at root project directory and make your needed changes, save that changes, and restart the server.
<br>
<br>