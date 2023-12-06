import dotenv from 'dotenv'
import databaseConnect from './database/DatabaseConnect'
import routes from './routes/AppRoutes'

if(process.env.NODE_ENV === 'dev') {
    dotenv.config({ path:'./config/.env.dev'})
}

databaseConnect.connect(process.env.DB as string)
.then(() => routes.start())