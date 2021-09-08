const mongoose = require('mongoose')
const MealSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now(),
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
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('meal', MealSchema)
