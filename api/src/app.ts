import express, { NextFunction } from 'express'
import session, {Store} from 'express-session'
import { SESSION_OPTIONS } from './config'
import { register } from './routes'

export const createApp = (store: Store) => {
    const app = express()

    app.use(express.json())

    app.use(
        session({
            ...SESSION_OPTIONS, 
            store
        })
    )

    app.use(register)

    app.use((req, res, next) => {
        res.status(404).json({ message : 'Not found' })
    })

    app.use((err: any, req: Request, res: Response, next: NextFunction)=> {
        if (!err.status) {
            console.error(err.stack)
        }
        res.status(500).json({ message: 'Internal Server Error'})
    })

    return app
}

