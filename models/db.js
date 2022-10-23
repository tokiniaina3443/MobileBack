const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mobile:Mobile@mobile.6n2m6ey.mongodb.net/Mobile?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log('Connection MongoDB success.');
    } else {
        console.log('Error Connection MongoDB : ' + JSON.stringify(err, undefined,2));
    }
});

require('./user.model');
