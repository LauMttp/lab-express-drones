// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function createDroneSeed() {
  const createdDrones = await Drone.create(drones);
  console.log(createdDrones);
  console.log("Count of drones", await Drone.count());
}

mongoose.connect("mongodb://localhost/lab-express-drones", async () => {
  console.log("Connected to Database");
  await createDroneSeed();
  mongoose.connection.close();
});

