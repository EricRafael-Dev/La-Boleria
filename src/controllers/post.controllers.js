import { postCakesQuery, postClientsQuery, postOrderQuery } from "../respositorys/post.repository.js"

export const postCakes = async (req, res) => {
    try {

        const { name, price, image, description } = req.body
        await postCakesQuery([name, price, image, description])
        res.sendStatus(201)
    } catch (err) {
        if (e.code === "23505") {
            return res.sendStatus(409)
            
        }
        res.sendStatus(500)
    }
}

export const postClients = async (req, res) => {
    try {
        const { name, address, phone } = req.body
        await postClientsQuery([name, address, phone])
        res.sendStatus(201)
    } catch (err) {
        if (e.code == "23514") {

            return res.status(400).send("number must be less or equal than 11 and more than 10")
            
        }
        res.sendStatus(500)
    }
}

export const postOrder = async (req, res) => {
    try {
        const { cakeId, clientId, quantity, totalprice } = req.body
        await postOrderQuery([cakeId, clientId, quantity, totalprice])
        res.sendStatus(201)
    } catch (err) {
        if (err.code === "23503") {
            return res.sendStatus(404)
            
        }

        res.sendStatus(500)
    }
}