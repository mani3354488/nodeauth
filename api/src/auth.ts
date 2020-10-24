import { Request } from "express"

export const isLoggedIn = (req: Request) => !!req.session.userId //double negate -> if we get undefine (it converts to false) -> if we get string of obj id (true)
export const logIn = (req: Request, userId: string) => {
    req.session!.userId = userId

}