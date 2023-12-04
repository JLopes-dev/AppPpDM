import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})

const Question = mongoose.model("questions", questionSchema)
export default Question