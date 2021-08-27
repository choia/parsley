const mongoose = require('mongoose')

const DB = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}

module.exports = connectDB
