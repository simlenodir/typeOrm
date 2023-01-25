import { DataSource } from "typeorm";
import path from "path";

export default new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "nodir",
    "database": "n33",
    "entities": [
        path.join(__dirname, '..', 'entitys', '*.entitys.{ts,js}')
    ],
    "logging": true,
    "synchronize": true
})