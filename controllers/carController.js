const Car = require("../models/carModel");

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find({ deleted: false }).populate("user_id", "user_name location phone_number");
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars", error });
  }
};

exports.addCar = async (req, res) => {
  const { model, location, price, release_date, mileage, user_id } = req.body;
  try {
    const newCar = new Car({ model, location, price, release_date, mileage, user_id });
    await newCar.save();
    // If form submission, you might redirect after adding the car:
    res.status(201).json({ message: "Car added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding car", error });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: "Error updating car", error });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndUpdate(req.params.id, { deleted: true });
    res.json({ message: "Car soft deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting car", error });
  }
};

exports.getAveragePriceByLocation = async (req, res) => {
  try {
    const result = await Car.aggregate([
      { $match: { deleted: false } },
      {
        $group: {
          _id: "$location",
          avgPrice: { $avg: "$price" }
        }
      }
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error in aggregation", error });
  }
};
