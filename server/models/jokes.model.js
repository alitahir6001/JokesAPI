const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "You need to have a joke"],
		minlength: [10, "Joke setup must be at least 10 characters long"]},
	punchline: {
		type: String,
		required: [true, "You need to have a punchline"],
		minlength: [3, "Punchline must be at least 3 characters long"]}
}, {timestamps: true}
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;