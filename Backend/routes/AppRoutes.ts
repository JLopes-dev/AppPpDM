import express, { Request, Response } from 'express'
import userController from '../controllers/UserController'
import questionController from '../controllers/QuestionController'
const app = express()
const router = express.Router()


class RoutesConfigs {

    public routesConfig() {
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
    }
    public  afterTheRoutes() {
        app.use(router)
        app.use((req: Request, res: Response) => {
            res.status(404).send({ message: "Route not found" })
        })
        app.listen(3001, () => console.log('Server listening at PORT 3001'));
    }
}
const routeConfigs = new RoutesConfigs()
class Routes {

    private routes() {
        routeConfigs.routesConfig()

        // Rotas de Usuários
        router.post('/user/register', userController.createUser)
        router.get('/user/show/:email', userController.showOneUser)
        router.post('/admin/show', userController.showAllUsers)
        router.put('/user/update', userController.updateUser)
        router.delete('/user/delete', userController.deleteUser)
       
        // Rotas de questões e perguntas
        router.post('/user/question/create', questionController.createQuestion)
        router.get('/user/question/show/:userId', questionController.showQuestions)
        router.post('/user/response/create', questionController.createResponse)
        routeConfigs.afterTheRoutes()
    }

    public start() {
        this.routes()
    }
}

const routes = new Routes()
export default routes