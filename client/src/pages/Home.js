import { useState, useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    getMeals()
  }, [])

  const [mealName, setMealName] = useState([])

  const getMeals = async () => {
    try {
      const res = await fetch('/meals')
      const data = await res.json()
      setMealName(data[0].mealName)
      console.log(data)
    } catch (e) {}
  }

  return (
    <div>
      <h2>{mealName}</h2>
    </div>
  )
}

export default Home
