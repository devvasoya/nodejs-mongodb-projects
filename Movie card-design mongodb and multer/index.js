const express = require('express');

const app = express();

const port = 8080;

app.set('view engine', 'ejs')

app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

const db = require('./config/db');

const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on :- http://localhost:${port}/`);
})