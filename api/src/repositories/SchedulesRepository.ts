
// import { prisma } from "../database/prisma";
import { IByDate, ICreate } from "../interfaces/SchedulesInterface";
import { endOfDay, startOfDay } from 'date-fns';
import { Schedule } from "../models";

class SchedulesRepository {

    async create({ name, phone, date, user_id}: ICreate) {
        const result = await Schedule.create({
            data: { name, phone, date, user_id}
        });

        return result;
    }

    async findByDate({ date, user_id }: IByDate) {
        const result = await Schedule.find({
            where: {
                date,
                user_id
            },
            orderBy: {
                date: 'asc'
            }
        });

        return result;
    }

    async findAllDate(date: Date) {
        const result = await Schedule.find({
            whereConditions: {
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
        const result = await Schedule.updateOne({
            whereConditions: {
                id
            },
            data: {
                date,
            }
        });

        return result;
    }

}

export { SchedulesRepository };