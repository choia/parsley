const mongoose = require('mongoose')
const MealSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  mealType: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('meal', MealSchema)
