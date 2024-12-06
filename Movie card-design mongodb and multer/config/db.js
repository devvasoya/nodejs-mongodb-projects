const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Movie-card');

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('DB is Connected');
})

module.exports = db;