// Require dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add API & View routes
app.use(routes);

// Set up promise with mongoose
mongoose.Promise = global.Promise;
// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytarticles");

// Start API server
app.listen(PORT, () =>
    console.log(`🦄  ==> API Server Listening on PORT ${PORT}`)
);