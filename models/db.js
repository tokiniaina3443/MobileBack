const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Andomahefa:Andomahefa2001.@cluster0.lne4g.mongodb.net/test', (err) => {
    if (!err) {
        console.log('Connection MongoDB success.');
    } else {
        console.log('Error Connection MongoDB : ' + JSON.stringify(err, undefined,2));
    }
});

require('./user.model');
