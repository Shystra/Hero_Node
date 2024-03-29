
// import { prisma } from "../database/prisma";
import { IByDate, ICreate } from "../interfaces/SchedulesInterface";
import { endOfDay, startOfDay } from 'date-fns';
import { prisma } from '../database/prisma';
// import { Schedule } from "../models";

class SchedulesRepository {

    async create({name, phone, date, user_id}: ICreate) {
        console.log(user_id);
        const result = await prisma.schedule.create({
          data: {
            name,
            phone,
            date,
            user_id
          },
        });
        return result
      }
    
      async find(date: Date, user_id: string) {
        const result = await prisma.schedule.findFirst({
          where: {date, user_id},
        });
        return result;
      }
    
      async findAll(date: Date) {
        const result = await prisma.schedule.findMany({
          where: {
            date: {
              gte: startOfDay(date),
              lt: endOfDay(date)
            },
          },
          orderBy: {
            date: 'asc'
          },
        });
        return result
      }
    
      async update(id: string, date: Date) {
        const result = await prisma.schedule.update({
          where: {
            id,
          },
          data: {
            date,
          },
        });
        return result
      }
    //   async delete(id: string) {
    //     const result = await prisma.schedule.delete({
    //       where: {
    //         id,
    //       },
    //     });
    //     return result;
    //   }
    }

export { SchedulesRepository };