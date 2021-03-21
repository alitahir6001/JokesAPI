const JokesController = require("../controllers/jokes.controller"); // this imports * from the controllers.js

// Routes that will either create a joke, retrieve a joke, update one, or delete one.

module.exports = app =>{


app.get('/api/jokes', JokesController.findAllJokes); 
app.get('/api/jokes/:_id', JokesController.findSingleJoke);
app.post('/api/jokes/new', JokesController.createJoke);
app.put('/api/jokes/update/:_id', JokesController.updateJoke);
app.delete('/api/jokes/delete/:_id', JokesController.deleteJoke);
}
