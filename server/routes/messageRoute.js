const express = require("express");
const router = express.Router();
const Message = require('../models/messageModel')



router.get('/sync',async(req,res)=>{
    try {
        const messages = await Message.find({})
        res.status(200).send(messages)
    } catch (error) {
        return res.status(400).json({message: error});
    }
})

router.post('/new', (req,res)=>{
    const {message, name , received} = req.body

    const newMessage = new Message({message, name , received})
    try {
        newMessage.save()
        res.status(201).send(`new message created: \n ${newMessage}`);
    } catch (error) {
        return res.status(400).json({ message: error });

    }
    
})


module.exports = router;