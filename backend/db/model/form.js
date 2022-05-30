const mongooose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongooose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    desc:{
        type:String,
        required:true,
        trim:true

    }
})

const Contact = mongooose.model('Contact',ContactSchema);

module.exports = Contact;