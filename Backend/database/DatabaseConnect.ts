import mongoose from 'mongoose'

class DatabaseConnect {
    public async connect(url: string) {
        return await mongoose.connect(url)
        .then(() => console.log('mongoose...'))
        .catch(err => console.log(` error: ${err}`))
    }    
}

const databaseConnect = new DatabaseConnect()
export default databaseConnect;