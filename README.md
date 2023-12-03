# AppsFlyer & QueenB Web Application

Welcome to my web application project! This server-client application is designed to efficiently manage mentors in the QueenB community. It empowers the user to seamlessly add and remove mentors, peruse a comprehensive list of mentors, explore detailed mentor profiles, and establish direct contact with them.

<div align="center">
  <img src="https://github.com/galbaryosef/AppsFlyer-Queen-B-Web-Application/raw/main/client/src/images/welcome.png" alt="Welcome" width="300" style="margin-right: 20px">
  <img src="https://github.com/galbaryosef/AppsFlyer-Queen-B-Web-Application/raw/main/client/src/images/mentorlist.png" alt="Mentor List" width="300" style="margin-right: 20px">
  <img src="https://github.com/galbaryosef/AppsFlyer-Queen-B-Web-Application/raw/main/client/src/images/mentorinfo.png" alt="Mentor Info" width="190" style="margin-right: 20px">
  <img src="https://github.com/galbaryosef/AppsFlyer-Queen-B-Web-Application/raw/main/client/src/images/register.png" alt="Register" width="150">
</div>

## Features
* Add and Remove Mentors: Effortlessly manage mentors in the QueenB community.
* Mentor List Page: Browse through a comprehensive list of all mentors in the community.
* Mentor Profile: Access detailed information and initiate direct contact with mentors.
* Mentor Search: Streamline your search by filtering mentors based on specific skills.

## Technologies Used
* Frontend: React
* Backend: Node.js
* Database: PostgreSQL
* API texting: Postman

## Running Locally
Clone the repository to your local computer:
```bash
git clone https://github.com/galbaryosef/AppsFlyer-Queen-B-Web-Application.git
cd AppsFlyer-Queen-B-Web-Application
```

To launch the server side of the project, navigate to the 'src' directory and execute the following commands:
```bash
  1. open a terminal and cd to src:
  cd src
  2. add dependencies:
  npm install
  3. Run the server:
  node server.js
```
To launch the client side of the project, navigate to the 'client' directory and execute the following commands:
```bash
  1. open a terminal and cd to the client:
  cd client
  2. add dependencies:
  npm install
  3. Start the client-side application:
  npm start
```
## Database Setup

Before running the application, make sure to set up your local PostgreSQL database. Follow these steps:
1. Initiate a table with the following columns:

```sql
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  linkedin VARCHAR(255),
  password VARCHAR,
  skills TEXT[],
  biography TEXT,
  photo VARCHAR
);
```

2. Modify the db.js file in the project to match your database details. Open the file and adjust the user, host, database, password, and any other necessary details according to your local setup.

Now, you're all set to run the application with your customized database configuration!
Feel free to adjust the instructions or code snippets based on your preferences or specific details related to your project.

## Contact me
  Email: galb9219@gmail.com

