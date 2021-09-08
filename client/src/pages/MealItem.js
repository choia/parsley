import { Fragment } from 'react'

const MealItem = ({ mealName, mealType }) => {
  // TODO: create custom hook
  const mealNameAndType = mealName.reduce((mealNameAndType, current, index) => {
    mealNameAndType[mealType[index]] = current

    return mealNameAndType
  }, {})

  const m = Object.entries(mealNameAndType)

  return (
    <div>
      {m.map((meal, index) => (
        <li key={index}>
          {meal[0]}: {meal[1]}
        </li>
      ))}
    </div>
  )
}

export default MealItem
