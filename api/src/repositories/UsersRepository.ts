import { DbConnection } from "../database/mongo";
// import { prisma } from "../database/prisma";
import { ICreate } from "../interfaces/UsersInterface";
import { User } from "../models";

class UsersRepository {
    async create({name, email, password}: ICreate) {
        const result = await User.create({data: {name, email, password}});

        return result;
    }

    async findUserByEmail(email: string) {
        const result = await User.findOne({where: {email: email}});

        return result;
    }

    async findUserById(id: string) {
        const result = await User.findOne({where: {id: id}});

        return result;
    }

    async update(name: string, avatar_url: string, user_id: string) {
        const result = await User.updateOne({
            where: {
                id: user_id
            },
            data: {
                name,
                avatar_url
            }
        });

        return result;
    }

    async updatePassword(newPassword: string, user_id: string) {
        const result = await User.updateOne({
            where: {
                id: user_id
            },
            data: {
                password: newPassword
            }
        });

        return result;
    }
}

export { UsersRepository };