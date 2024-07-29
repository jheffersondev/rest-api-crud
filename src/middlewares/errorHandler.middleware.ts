import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export default function ErrorHandler (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    if(error) {
        return res.send(error).status(400);
    } else{
        next()
    }
}