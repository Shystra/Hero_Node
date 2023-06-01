import { ICreate } from "../interfaces/Schedulesinterface";
import { startOfHour } from 'date-fns';
class SchedulesService{
    create({ name, phone, date }: ICreate){
        console.log("~ file: ScheduleService.ts:5 ~ SchedulesService ~ create ~ date:",
        date,
        );

        const dateFormatted = new Date(date);
        const hourStart = startOfHour(dateFormatted)
        console.log(
            "~ file: ScheduleService.ts:5 ~ SchedulesService ~ create ~ hourStart",
            hourStart, 
        );

    
    }
};

export { SchedulesService }