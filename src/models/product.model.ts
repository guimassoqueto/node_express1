import { PrismaClient } from "@prisma/client";

type TProduct = {
    id: number,
    title: string;
    image: string;
    price: number;
    description: string;
    available: number;
    createdBy: number;
}

const prisma = new PrismaClient();

class Products {
    static async getSingleProduct(id: number) {
        try {
            const product = prisma.product.findUnique({
                where: { id: id }
            })
            return product
        }
        catch(error) {
            console.error(error);
            return [];
        }
    }

    static async getAllProducts(): Promise<Products[]> {
        try {
            const products = await prisma.product.findMany();
            return products;
        }
        catch(error) {
            console.error(error);
            return [];
        }
    }
    
    static async addProduct(product: TProduct): Promise<TProduct | unknown> {
        try {
            const new_product = prisma.product.create({
                data: {
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    description: product.description,
                    available: product.available,
                    createdBy: product.createdBy
                }
            })
            return new_product
        }
        catch(error) {
            return error;
        }
    }

    static async updateProduct(product: TProduct): Promise<Products | unknown> {
        try {
            const updated_product = await prisma.product.update({
                where: {
                  id: product.id,
                },
                data: {
                  title: product.title,
                  description: product.description,
                  price: product.price,
                  image: product.image,
                  available: product.available
                },
            });
            return updated_product
        }
        catch (error) {
            return error
        }
    }

    static async deleteProduct(id: number): Promise<Products | unknown> {
        try {
            const removed = await prisma.product.delete({
                where: {
                    id: id,
                }
            })
            return removed
        }
        catch (error) {
            return error
        }
    }
}

export { TProduct, Products };