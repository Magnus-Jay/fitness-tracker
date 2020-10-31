const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        // required:"Exercise name required",
        trim: true
      },
    type: {
        type: String,
        // required: "Exercise type required",
        trim: true
      },
    weight: {
        type: Number,
        // required: "You must enter a weight"
      },
    sets: {
        type: Number,
        // required: "Must list how many sets"
      },
    reps: {
        type: Number,
        // required: "Must list how many reps"
      },
    duration: {
        type: Number,
        // required: "Must enter how much time you spent"
      },
    distance: {
        type: Number,
        // required: "Must enter the distance"
      },
});

const exercise = mongoose.model("exercise", exerciseSchema);

module.exports = exercise;
