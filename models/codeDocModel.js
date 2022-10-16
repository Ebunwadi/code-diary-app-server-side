import mongoose from "mongoose";
const {Schema} = mongoose;

const codeSchema = new Schema({
    day: Number,
    description: String,
    user_id: mongoose.Types.ObjectId,
    date: {type: Date, default: new Date()},
})

export default new mongoose.model('CodeDocs', codeSchema)