const mongoose = require('mongoose');

//Mongoose Config
mongoose.set('useCreateIndex', true);

//Connect with Database
mongoose.connect('mongodb://localhost:27017/test_task', {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully Test Task');
}).catch(err => {
    console.log(err);   
});