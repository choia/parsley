import { useState, useEffect } from 'react'
import MealList from './MealList'

const Home = () => {
  useEffect(() => {
    getMeals()
  }, [])

  const [meals, setMeals] = useState([])

  const getMeals = async () => {
    try {
      const res = await fetch('/meals')
      const meals = await res.json()

      setMeals(meals)
    } catch (e) {}
  }

  return (
    <div>
      {meals.map((mealList) => (
        <MealList key={mealList._id} mealList={mealList} />
      ))}
    </div>
  )
}

export default Home
