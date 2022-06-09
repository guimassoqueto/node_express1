import { config } from "mssql";
import "dotenv/config";

const mssql_config: config = {
    server: process.env.SERVER!,
    password: process.env.DB_PWD!,
    database: process.env.DATABASE!,
    user: process.env.DB_USERNAME!,
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export { mssql_config };