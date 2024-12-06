const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    desc: {
        type : String,
        require : true
    },
    price: {
        type : String,
        require : true
    },
    image: {
        type : String,
        require : true
    },
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;