import { getClientOrderQuery, getOrderByDate, getOrderByIdQuery, getOrderQuery } from "../respositorys/get.repository.js"


export const getOrder = async (req, res) => {
    const { date } = req.query
    try {
        if (date) {
            let formatedData = moment(date, "YYYY/MM/DD").format("YYYY-MM-DD")
            const orders = await getOrderByDate([formatedData])
        } else {
            const orders = await getOrderQuery()
        }
        res.send(orders.rows)
    } catch (err) {
        res.sendStatus(500)
    }
}

export const getOrderById = async (req, res) => {
    const { id } = req.params
    const idOrder = [id]
    try {
        const order = await getOrderByIdQuery(idOrder)
        if (order.rowCount === 0) {
            return res.sendStatus(404)
        }
        res.send(order.rows)
    } catch (err) {
        res.sendStatus(500)
    }
}

export const getOrderByClientId = async (req, res) => {
    const { id } = req.params
    const idOrder = [id]
    try {
        const order = await getClientOrderQuery(idOrder)
        if (order.rowCount === 0) {
            return res.sendStatus(404)
        }
        res.send(order.rows)
    } catch (err) {
        res.sendStatus(500)
    }
}