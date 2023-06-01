import { ICreate } from "../interfaces/Schedulesinterface";

class SchedulesService{
    create({ name, phone, date }: ICreate){
        console.log("~ file: ScheduleService.ts:5 ~ SchedulesService ~ create ~ date:",
        date,
        );



        return;


    }
};

export { SchedulesService }