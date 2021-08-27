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
    res.status(500).send('Server Error')
  }
})

router.put('/:id', async (req, res) => {
  const { name, mealType } = req.body

  const updateMeals = {}

  if (name) updateMeals.name = name
  if (mealType) updateMeals.mealType = mealType

  try {
    let meal = await Meal.findById(req.params.id)
    console.log(meal)

    meal = await Meal.findOneAndUpdate(req.params.id, updateMeals, {
      new: true,
    })
    res.json(meal)
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Sever Error')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let meal = await Meal.findById(req.params.id)

    if (!meal) return res.status(404).json({ msg: 'Meal not found ' })

    await Meal.findByIdAndRemove(req.params.id)
    res.json({ msg: 'Meal removed ' })
  } catch (e) {
    console.log(e.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
