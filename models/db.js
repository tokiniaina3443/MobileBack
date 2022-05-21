const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MobileDB', (err) => {
    if (!err) {
        console.log('Connection MongoDB success.');
    } else {
        console.log('Error Connection MongoDB : ' + JSON.stringify(err, undefined,2));
    }
});

require('./user.model');
