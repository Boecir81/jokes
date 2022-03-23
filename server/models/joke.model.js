const mongoose = require('mongoose');

//use mongoose to create a table
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is Requried"],
        minlength: [2, "Setup must be at least 2 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is Requried"],
        minlength: [2, "Punchline must be at least 2 characters long"]
    },
},

    { timestamps: true }

)

//register the table instructions above to be use as a table in mongodb
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;