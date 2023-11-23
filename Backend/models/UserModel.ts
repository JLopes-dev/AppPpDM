import { model, Schema } from 'mongoose'

const User = model('users', new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}))

export default User