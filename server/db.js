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

// const connection_url = 'mongodb+srv://krishshah123:thejungleking@cluster0.zy4gtar.mongodb.net/Whatsapp_CDB'
// mongoose.connect(connection_url,{
//     // useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })