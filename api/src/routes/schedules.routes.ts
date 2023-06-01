import { Router } from "express";
import { SchedulesController } from "../controllers/SchedulesController";
import { Schedule } from "@prisma/client";

class SchedulesRoutes {
    private router: Router;
    private schedulesController: SchedulesController
    constructor(){
        this.router = Router();
        this.schedulesController = new SchedulesController()

    }

    getRoutes(): Router {
        this.router.post('/', this.schedulesController.store.bind(this.schedulesController))

        
        return this.router


    }
};

export { SchedulesRoutes };