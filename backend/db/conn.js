const mongooose = require('mongoose');
// require('dotenv').config()
mongooose.connect("mongodb://localhost:27017/mongotest-api",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to DB');
}).catch(err=>{
    console.log(err);
})