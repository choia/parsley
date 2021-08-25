require('dotenv').config()
const express = require('express')
const connectDB = require('./db')
const app = express()
const PORT = process.env.PORT

connectDB()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).send('Parsley-App')
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
