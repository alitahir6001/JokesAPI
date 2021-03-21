const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(allCrappyJokes => res.json({ jokes: allCrappyJokes }))
        .catch(err => res.json({ message: "Nyahhh see? All jokes not found" }));
        // Alternatively:
        // .catch(err => res.status(404).json({errors:err.errors}))
};

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke => res.json({ jokes: singleJoke}))
        .catch(err => res.json({ message: "Nyahh See? A single Joke not found" }));
        // Alternatively:
        // .catch(err => res.status(404).json({errors:err.errors}))
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ jokes: newJoke}))
        // .catch(err => res.json({ message: "You didn't create a joke. Thank God." }));
        // Alternatively:
        .catch(err => res.status(404).json({errors:err.errors}))
};

module.exports.updateJoke = (req, res) => {
    Joke.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(updatedJoke => res.json({jokes: updatedJoke}))
        .catch(err => res.json({message:"The joke wasn't updated and still sucks"}))
        // Alternatively:
        // .catch(err => res.status(404).json({errors:err.errors}))

};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id:req.params.id})   // Find the joke you want to delete based on the _id, and delete it.
        .then(result => res.json({results: result})) // If it works, display the result
        .catch(err => res.json({message: "The joke still exists OH GOD WHY"}))
        // Alternatively:
        // .catch(err => res.status(404).json({errors:err.errors}))

};