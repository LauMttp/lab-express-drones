const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  const allDrones = await Drone.find();
  res.json(allDrones);
});

router.post("/drones", async (req, res, next) => {
  const newDrone = req.body;
  const createNewDrone = await Drone.create({
    name: newDrone.name,
    propellers: newDrone.propellers,
    maxSpeed: newDrone.maxSpeed,
  });
  console.log(createNewDrone);
  res.status(201).json({ drone: createNewDrone });
});

router.post("/drones/:id", async (req, res, next) => {
  const updatedDrone = req.body;
  const newDrone = await Drone.findByIdAndUpdate(
    req.params.id,
    {
      name: updatedDrone.name,
      propellers: updatedDrone.propellers,
      maxSpeed: updatedDrone.maxSpeed,
    },
    { new: true }
  );
  res.json({ newDrone });
});

router.delete("/drones/:id", async (req, res, next) => {
  await Drone.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
