const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "exercise"
    }
  ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;