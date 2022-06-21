import { Order } from "./models/order.model";

Order.createOrder(1)
    .then( created_order => {
        console.log(created_order);
    })
    .catch( error => {
        console.error(error);
    })
