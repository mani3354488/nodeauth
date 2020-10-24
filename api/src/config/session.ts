import { SessionOptions } from 'express-session'
import { IN_PROD } from './app'

const HALF_HOUR = 1000 * 60 * 30 
export const {
    SESSION_SECRET = `please keep this secret, mate`,
    SESSION_NAME = `sid`,
    SESSION_IDEL_TIMEOUT = HALF_HOUR,
} = process.env

export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
      maxAge: +SESSION_IDEL_TIMEOUT, //+ symbol to cast it an integer
      secure: IN_PROD,
      sameSite: true,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,    
}