require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form submissions

// Serve static files (CSS, client-side JS, images) from the public folder
app.use(express.static("public"));

// --- VIEW ROUTES ---

// Home (Car Listings)
const Car = require("./models/carModel");
app.get("/", async (req, res) => {
  try {
    const cars = await Car.find({ deleted: false });
    res.render("index", { cars });
  } catch (error) {
    res.status(500).send("Error fetching cars");
  }
});

// Add Car Page
app.get("/add-car", (req, res) => {
  res.render("add-car");
});

// Login Page
app.get("/login", (req, res) => {
  res.render("login");
});

// Register Page
app.get("/register", (req, res) => {
  res.render("register");
});

// --- API ROUTES ---
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/cars", require("./routes/carRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
