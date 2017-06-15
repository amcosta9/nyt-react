// load dependencies
let express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    mongoose = require("mongoose");

// require Article model
let Article = require("./models/Article");

// set up express
let app = express();
const PORT = process.env.PORT || 3005;

// run morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// serve static content from public dir
app.use(express.static("./public"));

// mongodb config
mongoose.connect("mongodb://localhost/nytreact");
let db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// landing route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// ----------
// TODO add routes here

// query db for all saved articles
app.get('/api/saved', function(req, res) {
    console.log("get route api/saved");
});

// save article to db
app.post('/api/saved', function(req, res) {
    console.log("post route api/saved");
});

// delete article from db
app.delete('/api/saved', function(req, res) {
    console.log("delete route api/saved");
});


// ----------

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});