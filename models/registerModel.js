import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: {type: String, required: ['must enter firstname']},
    lastName: {type: String, required: ['must enter lastname']},
    email: {type: String, required: ['must enter email']},
    password: {type: String, required: ['must enter password']},  
}, {
    timestamps: true
})

export default new mongoose.model('User', userSchema)