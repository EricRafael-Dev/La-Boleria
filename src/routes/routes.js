import express from  "express"
import {validateSchema} from "../middlewares/validateSchema.js"
import {cakeSchema, clientSchema, orderSchema} from "../schemas/schemas.js"
import { postCakes, postClients, postOrder } from "../controllers/post.controllers.js"
import { getOrder, getOrderByClientId, getOrderById } from "../controllers/get.controllers.js"

const app = express()

app.post("/cakes",validateSchema(cakeSchema),postCakes)
app.post("/clients",validateSchema(clientSchema),postClients)
app.post("/orders", validateSchema(orderSchema), postOrder)
app.get("/orders", getOrder)
app.get("/orders/:id", getOrderById)
app.get("/clients/:id/orders", getOrderByClientId)

export const router = app