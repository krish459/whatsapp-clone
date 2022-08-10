const mongoose = require('mongoose');

const whatsappSchema = mongoose.Schema({
    message:{
        type: String,
        
    },
    name:{
        type: String,
        
    },
    received:{
        type: Boolean,
        
    }
},{
    timestamps: true,
})

const whatsappModel = mongoose.model('messagecontent', whatsappSchema)

module.exports = whatsappModel

