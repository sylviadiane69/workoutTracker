const Workout = require("../models/workout.js")
module.exports = (app) => {
    //   Workout Routes   //
    app.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, workout) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });
    //add excerise, set id, push to model, set true
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        Workout.findOneAndUpdate({ _id: params.id },
            { $push: { excercises: body } },
            { upsert: true, useFindandModify: false },
            updatedWorkout => {
                res.json(updatedWorkout);
            })
    });
    //create new workout
    app.post("/api/workouts", (req, res) => {
        Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });
}





