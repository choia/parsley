const mongoose = require('mongoose')
const MealSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },

  weekDay: {
    type: String,
    required: true,
    default: '',
  },

  mealName: [
    {
      type: String,
      required: true,
    },
  ],

  mealType: [
    {
      type: String,
      required: true,
    },
  ],
})

module.exports = mongoose.model('meal', MealSchema)
