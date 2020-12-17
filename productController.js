const sequelize = require('sequelize')
const { db } = require('./db')
const { QueryTypes } = require('sequelize')

exports.insert = async (req, res) => {
    try {
        const product = await db.query(`INSERT INTO products (name, description, price, id_vendedor, id_comprador) 
        VALUES (:name, :description, :price, :id_vendedor, :id_comprador)`, 
        { replacements: { name: req.body.name, description: req.body.description, price: req.body.price, id_vendedor: req.body.id_vendedor, id_comprador: req.body.id_comprador},
        type: QueryTypes.INSERT})
        
        const prod_id = await db.query(`SELECT * FROM products WHERE prod_id = :id`, {
            replacements: { id: product[0]},
            type: QueryTypes.SELECT
        })
        res.send({prod_id}).status(201)
    } catch (error) {
        console.log(error)
    }
}