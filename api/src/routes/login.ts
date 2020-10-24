import { Router } from 'express'
import { catchAsync } from '../middleware'
import { User } from '../models'
import { validate, loginSchema } from '../validation'
import { Unauthorized } from '../errors'
import { logIn } from '../auth'

const router = Router()

router.post('/login', catchAsync(async (req, res) => {
    await validate(loginSchema, req.body)

    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await user.matchesPassword(password))) {
        throw new Unauthorized('Incorrect email or password')
    }

    logIn(req, user.id)

    res.json({ message: 'OK' })
}))

router.post('/logout', (req, res) => {

})

export default router 