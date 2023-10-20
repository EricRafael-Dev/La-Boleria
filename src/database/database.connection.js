import dotenv from  "dotenv"
import pg from  "pg"
const  {Pool}  = pg
dotenv.config()

const databaseConnection = {
    connectionString: process.env.DATABASE_CONNECTION_URL
}

process.env.NODE_ENV === "production" ? databaseConnection.ssl = true : databaseConnection.ssl = false

export  const db  = new Pool(databaseConnection)