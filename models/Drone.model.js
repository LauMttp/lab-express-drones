// Iteration #1
const { Schema, Model, model } = require("mongoose");

// define schema
const droneSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  propellers: {
    type: Schema.Types.Number,
    required: true,
  },
  maxSpeed: Schema.Types.Number,
});

// declare schema
const Drone = model("Drone", droneSchema);

// export schema
module.exports = Drone;
