import { db } from "../database/database.connection.js"

export const postCakesQuery = async (data) => {
    return await db.query(`INSERT into cakes(name,price,image,description) values($1,$2,$3,$4)`, data)
}

export const postClientsQuery = async (data) => {
    return await db.query(`INSERT into clients(name,address,phone) values($1,$2,$3)`, data)
}

export const postOrderQuery = async (data) => {
    return await db.query(`INSERT into order("cakeId", "clientId", quantity, "totalPrice") values($1,$2,$3,$4)`, data)
}

export const getOrderByDate = async (data) => {
    return await db.query(`SELECT row_to_json(cakes.*) AS cake,
        row_to_json(clients.*) AS client,
        orders.id AS "orderId",
        orders."createdAt",
        orders.quantity,
        CAST(orders.quantity * cakes.price AS NUMERIC) AS "totalPrice"
        FROM orders
        JOIN cakes ON cakes.id = orders."cakeId"
        JOIN clients ON clients.id = orders."clientId"
        WHERE date("createdAt") = $1
        GROUP BY orders.id, cakes.price, clients.id, cakes.*;`, data)
}

export const getOrderQuery = async () => {
    return await db.query(`SELECT row_to_json(cakes.*) AS cake,
        row_to_json(clients.*) AS client,
        orders.id AS "orderId",
        orders."createdAt",
        orders.quantity,
        CAST(orders.quantity * cakes.price AS NUMERIC) AS "totalPrice"
        FROM orders
        JOIN cakes ON cakes.id = orders."cakeId"
        JOIN clients ON clients.id = orders."clientId"
        GROUP BY orders.id, cakes.price, clients.id, cakes.*;`)
}

export const getOrderByIdQuery = async (data) => {
    return await db.query(`SELECT row_to_json(clients.*) AS client,
        row_to_json(cakes.*) AS cake,
        orders.id AS "orderId",
        orders."createdAt",
        orders.quantity,
        CAST(orders.quantity * cakes.price AS NUMERIC) AS "totalPrice"
        FROM orders
        JOIN cakes ON cakes.id = orders."cakeId"
        JOIN clients ON clients.id = orders."clientId"
        WHERE orders.id = $1
        GROUP BY orders.id, cakes.price. clients.id, cakes.*;`, data)
}

export const getClientOrderQuery = async (data) => {
    return await db.query(`SELECT orders.id AS "orderId",
        orders.quantity,
        orders."createdAt",
        CAST(orders.quantity * cakes.price AS NUMERIC) AS "totalPrice",
        cakes.name AS "cakeName"
        FROM orders
        JOIN cakes ON cakes.id = orders."cakeId"
        WHERE orders."clientId" = $1;`, data)
}