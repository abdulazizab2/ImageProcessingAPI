import express, { NextFunction, Request, Response } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.url} was routed`)
    next();
}

export default logger