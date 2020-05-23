// calling the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Date, type, and workout
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter exercise type'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter exercise name'
            },
            duration: {
                type: Number,
                required: 'Enter duration by minutes'
            },
            distance: {
                type: Number,
                required: 'Enter in miles'
            },
            weights: Number,
            reps: Number,
            Sets: Number,

        }]
});

// workout databaseS
var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;