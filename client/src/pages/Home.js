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
      // console.log(meals)
    } catch (e) {}
  }

  return (
    <div key={meals._id}>
      {meals.map((mealList) => (
        <MealList mealList={mealList} />
      ))}
    </div>
  )
}

export default Home
