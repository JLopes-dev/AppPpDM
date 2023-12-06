import mongoose from "mongoose";
import responseSchema from "./ResponseModel";
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    response: [responseSchema],
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})

const Question = mongoose.model("questions", questionSchema)
export default Question