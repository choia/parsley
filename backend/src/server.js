require('dotenv').config()
const express = require('express')
const connectDB = require('./db')
const mealRouter = require('./routes/meals')

const app = express()
const PORT = process.env.PORT

connectDB()

app.use(express.json())

app.use('/meals', mealRouter)

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))
