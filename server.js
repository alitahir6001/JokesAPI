const express = require("express"),
    mongoose = require('mongoose'),
    app = express();
    cors = require('cors'),
    // server = app.listen(port, () => console.log (`Listening on port ${port}`));



app.use(cors(), express.json(), express.urlencoded({extended:true}));

require('./server/config/mongoose.config');
require('./server/routes/jokes.routes');

const routes = require('./server/routes/jokes.routes.js');
routes(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
