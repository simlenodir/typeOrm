import { DataSource } from "typeorm";

const typeOrm = new DataSource({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "nodir",
    "database": "n37",
    "entities": [],
    "logging": true
})