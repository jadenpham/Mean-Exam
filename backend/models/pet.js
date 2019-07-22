var mongoose = require('mongoose');
require ('../config/mongoose.js');

// var SkillSchema = new mongoose.Schema({
//     skill: {type: String, required:[true, "Must input a skill"], minlength: [3, "Must be 3 characters"]}
// })

var PetSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Must be 3 characters"]},
    type: {type: String, required: [true, "Type must be provided"], minlength: [3, "Must be 3 characters"]},
    description: {type: String, required: [true, "Description must be provided"], minlength: [3, "Must be 3 characters"]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
}, {timestamps: true});

// mongoose.model("Skills", SkillSchema);
mongoose.model("Pets", PetSchema);

