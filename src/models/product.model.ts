import { join } from "path";
import { readFile, writeFile } from "fs";

const JSON_FILE = join(__dirname, 'MOCK_DATA.json');

type Product = {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
}

type ReadProductsCB = (products: Product[]) => void;
type ReadSingleProductCB = (product: Product | null) => void;
type AddDelProdCB = (status: null | "ok") => void;

function readProducts(callback: ReadProductsCB) {
    readFile(JSON_FILE, "utf8", (error, data) => {
        if (error) callback([]);
        else callback(JSON.parse(data));
    })
}

class Products {
    static addProduct(product: Product, callback: AddDelProdCB) {
        readProducts(products => {
            products.push(product);
            writeFile(JSON_FILE, JSON.stringify(products), (err) => {
                if (err) callback(null);
                else callback("ok");
            })
        })
    }

    static getAllProducts(callback: ReadProductsCB) {
        return readProducts(callback);
    }

    static getSingleProduct(id: string, callback: ReadSingleProductCB) {
        readProducts((products) => {
            const product_index = products.findIndex( prod => prod.id === id);
            if (product_index != -1) callback(products[product_index]);
            else callback(null);
        })
    }

    static deleteProduct_(id: string, callback: AddDelProdCB) {
        readProducts((products) => {
            const updated_products: Product[] = products.filter((product) => product.id !== id);
            console.log(updated_products);
            writeFile(JSON_FILE, JSON.stringify(updated_products), (err) => {
                if (err) callback(null);
                else callback("ok");
            })
        })
    }

    static deleteProduct(id: string) {
        readProducts((products) => {
            const updated_products: Product[] = products.filter((product) => product.id !== id);
            console.log(updated_products);
            writeFile(JSON_FILE, JSON.stringify(updated_products), (err) => {
                if (err) console.log(err);
            })
        })
    }
}

export { Product, Products };