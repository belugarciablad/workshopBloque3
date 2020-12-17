const sequelize = require('sequelize')
const { db } = require('./db')
const { QueryTypes } = require('sequelize')

exports.insert = async (req, res) => {
    try {
        const user = await db.query(`INSERT INTO users (name, lastname, password) 
        VALUES (:name, :lastname, :password)`, 
        { replacements: { name: req.body.name, lastname: req.body.lastname, password: req.body.password},
        type: QueryTypes.INSERT})
        console.log(user)
        const user_id = await db.query(`SELECT * FROM users WHERE user_id = :id`, {
            replacements: { id: user[0]},
            type: QueryTypes.SELECT
        })
        res.send({user_id}).status(201)
    } catch (error) {
        console.log(error)
    }
}