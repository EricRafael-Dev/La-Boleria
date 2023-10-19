import express from  "express"
import { postCakes, postClients } from "../controllers/controllers.js"
import {validateSchema} from "../middleweres/validateSchema.js"
import {cakeSchema, clientSchema} from "../schemas/schemas.js"

const app = express()

app.post("/cakes",validateSchema(cakeSchema),postCakes)
app.post("/clients",validateSchema(clientSchema),postClients)
export const router = app