import MealItem from './MealItem'

const MealList = ({ mealList }) => {
  const { mealName, mealType, date, weekDay } = mealList

  return (
    <div>
      <h2>{date}</h2>
      <h3>{weekDay}</h3>
      <MealItem mealName={mealName} mealType={mealType} />
    </div>
  )
}

export default MealList
