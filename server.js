const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//tell the server to run the code for mongoose.config.js
require("./server/config/mongoose.config")

//tell the server to connect to route
require("./server/routes/joke.routes")(app)









// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));