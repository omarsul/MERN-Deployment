const mongoose = require('mongoose');
 
const PetSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:[
            true,
            "Name is required"
        ],
        minlength:[
            3,
            "name must be at least 3 characters long"]
    },
    Type: {
        type: String,
        required:[
            true,
            "type is required"
        ],
        minlength:[
            3,
            "type must be at least 3 characters long"]
    },
    Desc: {
        type: String,
        required:[
            true,
            "description is required"
        ],
        minlength:[
            3,
            "description must be at least 3 characters long"]
    },
    Skill1: {
        type: String,
    },
    Skill2: {
        type: String,
    },  
    Skill3: {
        type: String,
    },
    
},
    { timestamps:true }  
);
 
const Pet = mongoose.model('Pet', PetSchema);
 
module.exports = Pet;
