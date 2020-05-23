// workout database required for output
const db = require("../models")
module.exports = (app) => {

    // loading data from workout database
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts/", ({ body }, res) => {
        db.Workout.create({ day: Date.now() })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts/", ({ body }, res) => {
        db.Workout.insertMany(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    // updating fitness tracker
    app.put("/api/workouts/:id", ({ params, body }, res) => {
        db.Workout.updateOne({ _id: params.id },
            { $push: { exercises: body } },
            { new: true, runValidators: true })
            .then(dbWorkout => res.json(dbWorkout))
            .catch(err => res.status(400).json(err));
    });

}

