# Car Marketplace

Car Marketplace is a full-stack web application that allows users to list, manage, and search for cars. It features a RESTful API built with Node.js, Express, and MongoDB (using MongoDB Atlas), and a dynamic frontend rendered with EJS templates.

## Features

- **CRUD Operations:**
  - Create, read, update, and soft-delete car listings.
- **User Authentication & Authorization:**
  - Secure user registration and login.
  - Passwords are hashed using bcryptjs.
  - Protected routes using JSON Web Tokens (JWT).
- **Dynamic Frontend:**
  - EJS-based views with navigation buttons (Home, Add Car, Login, Register) on every page.
- **Advanced Data Handling:**
  - Compound indexes to optimize queries.
  - Aggregation pipelines (e.g., calculating the average car price by location).

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, HTML, CSS
- **Authentication:** JWT, bcryptjs
- **Environment Variables:** dotenv

## Installation

## 1. Prerequisites

- **Node.js** (v12 or later)
- **npm** (comes with Node.js)
- A MongoDB instance (e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local installation)

## 2. Clone the Repository

Open your terminal and run:

``bash
git clone https://github.com/yourusername/car_marketplace.git
cd car_marketplace

## 3. Install Dependencies
Install the required npm packages by running:

- npm install

## 4. Create a .env File
In the root directory of the project, create a file named .env and add the following configuration:
- env
- MONGO_URI=mongodb+srv://<dbname>:your_db_password@<clustername>.7wjii.mongodb.net/car_marketplace?retryWrites=true&w=majority
- PORT=5000
- JWT_SECRET=your_jwt_secret

## 5. Start the Server
For development (with auto-reload):

- npm run dev
For production:

- npm start
6. Access the API
Once the server is running, you can access the API at:
arduino
http://localhost:5000/

That's it! You now have the Car Marketplace API up and running.
