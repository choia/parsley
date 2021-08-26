const express = require('express')
const router = express.Router()

const Meal = require('../models/Meal')

router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find({
      meal: req.meal,
    })
    res.status(200).json(meals)
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server Error')
  }
})

router.post('/', async (req, res) => {
  const { name, mealType } = req.body

  try {
    const newMeal = new Meal({
      name,
      mealType,
    })

    const meals = await newMeal.save()
    res.status(200).json(meals)
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Error in Meal')
  }
})

module.exports = router
