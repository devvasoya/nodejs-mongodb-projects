const express = require('express')

const port = 8000;

const app = express()

const db = require('./config/db')

app.set('view engine', 'ejs');

const user = require('./modules/usermodel')

app.use(express.urlencoded())


app.get('/', (req, res) => {
    res.render('add')
})

app.get('/v',(req, res)=>{
    res.render('views')
})

app.get('/viewRecord', (req, res) => {
    user.find({})
        .then((data) => {
            res.render('view', {
                record: data
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.post('/insertRecord', (req, res) => {
    const { name, description, price, author } = req.body;

    user.create({
        name: name,
        description: description,
        price: price,
        author: author
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log('record add');
        return res.redirect('/viewRecord');
    })
})

app.get('/deleteRecord', (req, res) => {
    let id = req.query.deleteId;
    user.findByIdAndDelete(id)
        .then((data) => {
            console.log('user delete');
            return res.redirect('/viewRecord')
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/editRecord', (req, res) => {
    let id = req.query.id;
    user.findById(id)
        .then((single) => {
            return res.render('edit', {
                data: single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.post('/updateRecord', (req, res) => {
    const { editid, name, description, price, author } = req.body;

    user.findByIdAndUpdate(editid, {
        name: name,
        description: description,
        price: price,
        author: author
    }).then((data) => {
        console.log(data);
        return res.redirect('/viewRecord')
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port :- ${port}`);

})