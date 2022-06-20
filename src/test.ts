import { ProductOnCart } from "./models/cart.model";

ProductOnCart.getProductsOnCart(1)
.then(p => console.log(p))
.catch(err => console.error(err))