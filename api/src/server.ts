import express, { Application, NextFunction, Request, Response } from 'express';
import { UsersRoutes } from './routes/users.routes';
import multer from 'multer';
import { upload } from './config/multer';
import { SchedulesRoutes } from './routes/schedules.routes';
import cors from 'cors';
// import { DbConnection } from './database/mongo';



const app: Application = express();
// const dabase = new DbConnection()

// dabase.connect()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// /old?text=Olá%20Mundo

const usersRoutes = new UsersRoutes().getRoutes();
const schedulesRoutes = new SchedulesRoutes().getRoutes();



app.use('/users', usersRoutes);
app.use('/schedules', schedulesRoutes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
            
        });
        
    }
    return response.status(500).json({
        message: 'Internal Server Error',
    });
    }
);

app.listen(3003, () => console.log('Server is running'));