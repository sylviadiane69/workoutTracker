//connection for app to run
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

// setting the port
const PORT = process.env.PORT || 3000;

// connection to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  });

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

// routes required to open app
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// listening on localhost: 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}..`);
});

