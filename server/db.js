const  mongoose  = require("mongoose");

var mongoURL = process.env.DB 



mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Mongodb connection successful`);
})

db.on('error', ()=>{

    console.log(`Mongodb connection failed`);
})

module.exports = mongoose

