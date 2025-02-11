const express = require("express");
const { getCars, addCar, updateCar, deleteCar, getAveragePriceByLocation } = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getCars);
router.post("/", authMiddleware, addCar);
router.put("/:id", authMiddleware, updateCar);
router.delete("/:id", authMiddleware, deleteCar);
router.get("/average-price", getAveragePriceByLocation);

module.exports = router;
