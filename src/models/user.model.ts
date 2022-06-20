import { PrismaClient } from "@prisma/client";

type TUser = {
    id: number,
    email: string,
    name: string,
}

const prisma = new PrismaClient();

class Users {
    static async getOrCreateUser() {
        try {
            const user: TUser = await prisma.user.upsert({
                where: {
                  id: 1,
                },
                update: {},
                create: {
                  email: 'viola@prisma.io',
                  name: 'Viola the Magnificent',
                },
            });
            
            return user
        }
        catch (error) {
            return error
        }
    }


    static async getSingleUser(id: number): Promise<TUser | null | unknown> {
        try {
            const user = prisma.user.findUnique({
                where: {
                    id: id
                }                
            })
            return user
        }
        catch (error) {
            return error
        }
    }

    static async getAllUsers() {
        try {
            const all_users = await prisma.user.findMany();
            return all_users
        }
        catch (error) {
            return error
        }
    }
    
    static async addUser(user: TUser) {
        try {
            const new_user = await prisma.user.create({
                data: {
                    email: user.email,
                    name: user.name
                }
            })

            return new_user
        }
        catch (error) {
            return error;
        }
    }

    static async updateUser() {
        try {
            // code here
        }
        catch (error) {
            // code here
        }
    }

    static async deleteUser() {
        try {
            // code here
        }
        catch (error) {
            // code here
        }
    }
}

export { Users, TUser }