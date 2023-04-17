// external modules import
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/astro', {
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
    
}).then(() => {
    console.log('Todo connection is successfully');
}).catch((e) => {
    console.log('No Connection');
})
