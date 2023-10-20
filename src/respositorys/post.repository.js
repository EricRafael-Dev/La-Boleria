import { db } from "../database/database.connection.js"

export const postCakesQuery = async (data) => {
    return await db.query(`INSERT into cakes(name,price,image,description) values($1,$2,$3,$4)`, data)
}

export const postClientsQuery = async (data) => {
    return await db.query(`INSERT into clients(name,address,phone) values($1,$2,$3)`, data)
}

export const postOrderQuery = async (data) => {
    return await db.query(`INSERT into orders("cakeId", "clientId", quantity, "totalPrice") values($1,$2,$3,$4)`, data)
}

