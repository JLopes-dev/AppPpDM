import express, { Request, Response } from 'express'
import userController from '../controllers/UserController'
const app = express()
const router = express.Router()

class UserRoutes {
    private routesConfig() {
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
    }
    private afterTheRoutes() {
        app.use(router)
        app.use((req: Request, res: Response) => {
            res.status(404).send({ message: "Route not found" })
        })
        app.listen(3001, () => console.log('Server listening at PORT 3001'));
    }

    private routes() {
        this.routesConfig()
        router.post('/user/register', userController.createUser)
        this.afterTheRoutes()
    }

    public start() {
        this.routes()
    }
}

const userRoutes = new UserRoutes()
export default userRoutes