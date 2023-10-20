import express from  "express"
import { getOrder, getOrderByClientId, getOrderById, postCakes, postClients, postOrder } from "../controllers/controllers.js"
import {validateSchema} from "../middlewares/validateSchema.js"
import {cakeSchema, clientSchema, orderSchema} from "../schemas/schemas.js"

const app = express()

app.post("/cakes",validateSchema(cakeSchema),postCakes)
app.post("/clients",validateSchema(clientSchema),postClients)
app.post("/orders", validateSchema(orderSchema), postOrder)
app.get("/orders", getOrder)
app.get("/orders/:id", getOrderById)
app.get("/clients/:id/orders", getOrderByClientId)

export const router = app