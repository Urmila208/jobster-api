
const mongoose = require('mongoose')
mongoose.set('strictQuery', true); // or false, depending on your preference

const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    
}
module.exports = connectDB

