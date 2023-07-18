import { DbConnection } from "../database/mongo";
// import { prisma } from "../database/prisma";
import { ICreate } from "../interfaces/UsersInterface";
import { Users } from "../models";

class UsersRepository {
    async create({name, email, password}: ICreate) {
        const result = await Users.create({data: {name, email, password}});

        return result;
    }

    async findUserByEmail(email: string) {
        const result = await Users.findUnique({where: {email: email}});

        return result;
    }

    async findUserById(id: string) {
        const result = await Users.findUnique({where: {id: id}});

        return result;
    }

    async update(name: string, avatar_url: string, user_id: string) {
        const result = await Users.update({
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
        const result = await Users.update({
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