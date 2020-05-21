const db = require("../models")
module.exports = (app) => {

    app.get("/api/workouts/", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });
    //add exercise
    app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id },
            { $push: { excercises: body } },
            { upsert: true, useFindandModify: false },
            updatedWorkout => {
                res.json(updatedWorkout);
            })
    });
    //create new workout
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });
    app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.updateOne({ _id: params.id }, { $push: { exercises: body } }, { new: true, runValidators: true })
        .then(doc => res.json(doc))
        .catch(err => res.json(err));
    });

}




