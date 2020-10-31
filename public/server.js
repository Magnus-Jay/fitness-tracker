const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("../models");
const { exercise } = require("../models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessappdb", { useNewUrlParser: true });

// db.workout.create({ name: "legs" })
//   .then(dbworkout => {
//     console.log(dbworkout);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

  // db.exercise.create([{ name: "toes" },{ type: "lower body" },{ weight: 5 },{ sets: 4 },{ reps: 2 },{ distance: 0 },{ duration: 1 }])
  // .then(dbexercise => {
  //   console.log(dbexercise);
  // })
  // .catch(({ message }) => {
  //   console.log(message);
  // });

app.get("/workout", (req, res) => {
  db.workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/exercise", (req, res) => {
  db.exercise.find({})
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.json(err);
    });
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
