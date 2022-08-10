// importing
require('dotenv').config()
const express =require("express")
const messageRoute = require('./routes/messageRoute.js')
const db = require("./db");
const Pusher = require("pusher");
const { default: mongoose } = require("mongoose");
const cors = require('cors')

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    
    appId: process.env.APPID,
    key: process.env.KEY,
    secret: process.env.SECRET,
    cluster: process.env.CLUSTER,
    useTLS: true
  });

// middlewares
app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    res.setHeader("Access-control-Allow-Origin","*")
    res.setHeader("Access-control-Allow-Headers","*")
    next();

});


const db1 = mongoose.connection
db1.once('open',()=>{
    console.log('DB is connected');
    const msgCollection = db1.collection('messagecontents')
    const changeStream = msgCollection.watch();
    changeStream.on('change',(change)=>{
        console.log(change);
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',{
                name: messageDetails.name,
                message: messageDetails.message,
                received: messageDetails.received,
            }
            );
        } else {
                console.log('Error triggering Pusher');
            }
            
        });
    });


// api routes
app.get('/',(req, res)=>res.status(200).send('hello world'))
app.use('/api/messages', messageRoute)


// listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`))