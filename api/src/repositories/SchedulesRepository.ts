import { endOfDay, startOfDay } from "date-fns";
// import { prisma } from "../database/prisma";
import { IByDate, ICreate } from "../interfaces/SchedulesInterface";
import { Shedules } from "../models";

class SchedulesRepository {

    async create({ name, phone, date, user_id}: ICreate) {
        const result = await Shedules.create({
            data: { name, phone, date, user_id}
        });

        return result;
    }

    async findByDate({date, user_id}:IByDate) {
        const result = await Shedules.findFirst({where: { date, user_id }});

        return result;
    }

    async findAllDate(date: Date) {
        const result = await Shedules.findMany({
            where: {
                date: {
                    gte: startOfDay(date),
                    lt: endOfDay(date)
                }
            },
            orderBy: {
                date: 'asc'
            }
        });

        return result;
    }

    async update(id: string, date: Date) {
        const result = await Shedules.update({
            where: {
                id,
            },
            data: {
                date,
            }
        });

        return result;
    }


}

export { SchedulesRepository };