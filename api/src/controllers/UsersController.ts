import { NextFunction, Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";
import { s3 } from "../config/aws";
import {v4 as uuid} from 'uuid';
import { upload } from "../config/multer";

class UsersController {
    private usersServices: UsersServices
    constructor(){
        this.usersServices = new UsersServices()
    }

    index(){
        //buscar todos
    }

    show(){
        //buscar somente um
    }






    async store(request: Request, response: Response, next: NextFunction){    
        //criar

        const { name, email, password } = request.body;
        try {
            const result = await this.usersServices.create({ name, email, password });




            return response.status(201).json(result);
        } catch(error){
            next(error)
        };

    }






    auth(){
        //autenticacao
    }

    async update(request: Request, response: Response, next: NextFunction){
        const { name, oldPassword, newPassword } = request.body;
        console.log(request.file);

        try {
            const avatar_url = request.file?.buffer;
            const uploadS3 = await s3.upload({
                Bucket: 'projeto-heroi',
                Key: `${uuid()}-${request.file?.originalname}`,
                // ACL: 'public-read',
                Body: avatar_url,
            }).promise();
            
            console.log('url imagem =>', uploadS3.Location);

        } catch (error) {
            next(error);
        }

    }
}

export { UsersController }