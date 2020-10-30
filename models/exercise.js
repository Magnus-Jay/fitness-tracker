const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required:"Exercise name required",
        trim: true
      },
    type: {
        type: String,
        required: "Exercise type required"
      },
    weight: {
        type: Number,
        required: "You must enter a weight"
      },
    sets: {
        type: Number,
        required: "Must list how many sets"
      },
    reps: {
        type: Number,
        required: "Must list how many reps"
      },
    duration: {
        type: Number,
        required: "Must enter how much time you spent"
      },
    distance: {
        type: Number,
        required: "Must enter the distance"
      },
});

const Exercise = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercise;
