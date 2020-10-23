import express from 'express'
import session, {Store} from 'express-session'
import { SSLOptions } from 'mongodb'
import { SESSION_OPTIONS } from './config'

export const createApp = (store: Store) => {
    const app = express()

    app.use(
        session({
            ...SESSION_OPTIONS, 
            store
        })
    )

    app.get('/register', (req, res) => res.json({ message: 'OK'}))
    return app
}

