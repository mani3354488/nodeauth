import { NextFunction, RequestHandler } from "express";

import { RequestHandler, Request, Response, NextFunction } from "express";

export const catchAsync = (handler: RequestHandler) => 
    (...args: [Request, Response, NextFunction ]) => handler(...args).catch(args[2])
