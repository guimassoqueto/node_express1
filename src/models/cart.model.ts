import { PrismaClient } from "@prisma/client";
import { TProduct } from "../models/product.model";

type TProductOnCart = {
    productId: number;
    cartId: number;
    product: TProduct;
}

const prisma = new PrismaClient();

class ProductOnCart {
    id: any;
    static async addToProductsOnCart(product_id: number, user_id: number) {
        try {
            const prod_on_cart = await prisma.productsOnCart.create({
                data: {
                    productId: product_id,
                    userId: user_id
                }
            })
            return prod_on_cart
        }
        catch (error) {
            console.error(error);
        }
    }

    static async getProductsOnCart(user_id: number) {
        try {
            const prods_on_cart = await prisma.productsOnCart.findMany({
                where: {
                    userId: user_id
                },
                include: {
                    product: true
                }
            })
            return prods_on_cart
        }
        catch (error) {
            return error;
        }
    }

    static async removeFromCart(product_id: number, user_id: number) {
        try {
            const removed_item_from_cart = await prisma.productsOnCart.deleteMany({
                where: {
                    productId: product_id,
                    userId: user_id
                }
            })
            return removed_item_from_cart
        } 
        catch (error) {
            return error
        }
    }

}

export { ProductOnCart, TProductOnCart };