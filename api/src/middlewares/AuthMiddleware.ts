import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}




class AuthMiddleware{
    auth( request: Request, response:Response, next:NextFunction){
        const authHeader = request.headers.authorization;
        if(!authHeader){
            return response.status(401).json({
                code: 'token.missing',
                message: 'Token missing',
            });
        }
        //Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY4NTQ5MzU5OSwiZXhwIjoxNjg1NDk0NDk5LCJzdWIiOiI2NjRlMzNhNi00YjhkLTRjMjktYmFiNS04YTQxNDJkYzNiMmQifQ.QsL6AHKqxqJ2v53PRNNRr22va5DPokh7KYfV_jD0Q5w
        const [, token] = authHeader.split(' ');
        let secretKey: string | undefined = process.env.ACCESS_KEY_TOKEN 
        if (!secretKey){
            throw new Error ('There is no token key');
        }

        try {
            const { sub } = verify(token, secretKey) as IPayload;
            request.user_id = sub;
            return next() 
        } catch (error) {
            return response.status(401).json({
                code: 'token.expired',
                message: 'Token expired.',
            })
        }
    }
}

export { AuthMiddleware }