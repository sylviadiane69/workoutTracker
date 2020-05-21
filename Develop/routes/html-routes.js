const db = require("../models");
const path = require('path');
module.exports = (app) => {
    //index
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //exercise
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    //stats
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}