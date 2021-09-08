import intlFormat from 'date-fns/intlFormat'
import MealItem from './MealItem'

const MealList = ({ mealList }) => {
  const { mealName, mealType, date, weekDay } = mealList

  const currentDate = intlFormat(new Date(date), {
    localeMatcher: 'best fit',
    month: 'short',
    day: '2-digit',
    weekday: 'short',
    formatMatcher: 'basic',
  })

  return (
    <div>
      <h2>{currentDate}</h2>
      <h3>{weekDay}</h3>
      <MealItem mealName={mealName} mealType={mealType} />
    </div>
  )
}

export default MealList
