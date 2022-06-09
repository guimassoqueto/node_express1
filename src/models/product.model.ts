import { connect } from "mssql";
import { mssql_config } from "../utils/sqlserver_config";

type Product = {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
    available: number;
}

function runQuery(query: string) {
    return connect(mssql_config)
    .then((pool) => {
      return pool.query(query);
    });
}

class Products {
    static async getSingleProduct(id: string): Promise<Product[]> {
        try {
            const results = await runQuery(`SELECT * FROM tblProducts WHERE id = '${id}'`);
            const [product, ...rest] = results.recordset;
            return product
        }
        catch(error) {
            console.error(error);
            return [];
        }
    }

    static async getAllProducts(): Promise<Product[]> {
        try {
            const results = await runQuery(`SELECT * FROM tblProducts;`);
            const products = results.recordset;
            return products
        }
        catch(error) {
            console.error(error);
            return [];
        }
    }
    
    static async addProduct(product: Product): Promise<number> {
        const {id, title, image, price, description, available} = product;

        try {
            const results = await runQuery(`INSERT INTO tblProducts(id, title, image, price, description, available) VALUES('${id}', '${title}', '${image}', ${price}, '${description}', ${available});`);
            const [lines_affected, ...rest] = results.rowsAffected;
            return lines_affected
        }
        catch(error) {
            console.error(error);
            return 0;
        }
    }

    static async updateProduct(product: Product): Promise<number> {
        const {id, title, image, price, description, available} = product;

        try {
            const results = await runQuery(`UPDATE tblProducts SET title='${title}', description='${description}', price=${price}, image='${image}', available=${available} WHERE id='${id}'`);
            const [lines_affected, ...rest] = results.rowsAffected;
            return lines_affected
        }
        catch(error) {
            console.error(error);
            return 0;
        }
    }

    static async deleteProduct(id: string): Promise<number> {

        try {
            const results = await runQuery(`DELETE FROM tblProducts WHERE id='${id}';`);
            const [lines_affected, ...rest] = results.rowsAffected;
            return lines_affected
        }
        catch(error) {
            console.error(error);
            return 0;
        }
    }
}

export { Product, Products };