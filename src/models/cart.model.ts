import { Product, Products } from "./product.model";
import { join } from "path";
import { readFile, writeFile } from "fs";

const JSON_FILE = join(__dirname, 'cart.json');

type ReadCartCB = (cart_items: Product[]) => void;
type AddCartCB = (status: "ok" | null) => void;

function readCart(callback: ReadCartCB) {
    readFile(JSON_FILE, "utf8", (error, data) => {
        if (error) callback([]);
        else callback(JSON.parse(data));
    })
}
class Cart {
    static getCart(callback: ReadCartCB) {
        readCart(callback);
    }

    static addToCart(id: string, callback: AddCartCB) {
        readCart((cart_items) => {
            Products.getSingleProduct(id, (product) => {
                if (product && !cart_items.includes(product)) {
                  cart_items.push(product);
                  writeFile(JSON_FILE, JSON.stringify(cart_items), (err) => {
                    if(err) callback(null);
                    else callback("ok");
                  })
                }
                else callback(null);
            })
        })
    }
}

export { Cart };