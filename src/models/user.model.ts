import { PrismaClient } from "@prisma/client";

type User = {
    id: number,
    email: string,
    name: string,
}

const prisma = new PrismaClient();

class Users {
    static async getSingleUser(id: number): Promise<User | null | unknown> {
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
    
    static async addUser(user: User) {
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

export { Users, User }