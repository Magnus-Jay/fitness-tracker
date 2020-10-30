const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;