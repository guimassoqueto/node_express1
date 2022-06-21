import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Order {
    static async createOrder(order_owner_id: number) {
        try {
            const new_order = await prisma.orders.create({
                data: {
                    orderOwner: order_owner_id
                },
                select: {
                    id: true
                }
            });

            const cart_items = await prisma.productsOnCart.findMany({
                where: {
                    userId: order_owner_id
                },
                select: {
                    productId: true
                }
            })

            const order_details_data = cart_items.map( item => {
                return { ...item, orderId: new_order.id }
            })

            const created_orderDetails = await prisma.orderDetails.createMany({
                data: [
                    ...order_details_data
                ],
            })

            await prisma.productsOnCart.deleteMany({
                where: {
                    userId: order_owner_id
                }
            })
            return created_orderDetails
        }
        catch (error) {
            return error
        }
    }
}

export { Order };