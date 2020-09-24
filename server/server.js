var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const dbURI = "mongodb+srv://admin:adminonly@cluster0.rmwim.mongodb.net/users_db?retryWrites=true&w=majority";
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => {
		app.listen(port, function () {
			console.log("Server: " + port);
			console.log("Database: MongoDB");
			console.log(result);
		});
	})
	.catch((err) => {
		console.log(err);
	});
