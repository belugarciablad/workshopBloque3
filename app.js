const { Router } = require('express')
const express = require('express')
const { db } = require('./db')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use('/', routes())

app.listen(3000, () => {
    console.log('api escuchando en puerto 3000')
})