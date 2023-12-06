import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    response: {
        type: String,
        require: true
    }
})

export default responseSchema 