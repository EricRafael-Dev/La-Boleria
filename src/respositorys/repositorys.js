import { db} from "../databaseConnection/database.connection.js"

export const postCakesQuery = async (data) => {
return  await db.query(`insert into cakes(name,price,image,description) values($1,$2,$3,$4)`,data)
}

export  const postClientsQuery = async(data)=>{
    return  await db.query(`insert into clients(name,address,phone) values($1,$2,$3)`,data)
}