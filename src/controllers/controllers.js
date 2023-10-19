import { postCakesQuery,postClientsQuery } from "../repositorys/repositorys.js"

export const postCakes = async (req, res) => {
    try {

        const { name, price, image, description } = req.body
        await postCakesQuery([name, price, image, description])
        res.sendStatus(201)
    } catch(e){
       if(e.code === "23505"){
        res.sendStatus(409)
        return
       }
       res.sendStatus(500)
    }
}

export  const postClients = async (req,res) => {
    try {
        const {name, address, phone} = req.body
        await postClientsQuery([name, address, phone])
        res.sendStatus(201)
    } catch(e){
        console.log(e)
        if(e.code == "23514"){
            res.status(400).send("number must be  less or  equal than 11 and more than 10")
            return
        }
        res.sendStatus(500)
    }
}