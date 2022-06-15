import { PrismaClient } from "@prisma/client";

type Product = {
    id: number,
    title: string;
    image: string;
    price: number;
    description: string;
    available: number;
}

const prisma = new PrismaClient();

class Products {
    static async getSingleProduct(id: number) {
        try {
            const product = prisma.products.findUnique({
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
            const products = await prisma.products.findMany();
            return products;
        }
        catch(error) {
            console.error(error);
            return [];
        }
    }
    
    static async addProduct(product: Product): Promise<Product | unknown> {
        try {
            const new_product = prisma.products.create({
                data: {
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    description: product.description,
                    available: product.available
                }
            })
            return new_product
        }
        catch(error) {
            return error;
        }
    }

    static async updateProduct(product: Product): Promise<Products | unknown> {
        try {
            const updated_product = await prisma.products.update({
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
            const removed = await prisma.products.delete({
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

export { Product, Products };