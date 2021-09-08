import { Fragment } from 'react'

const MealItem = ({ mealName, mealType }) => {
  // TODO: create custom hook
  const mealNameAndType = mealName.reduce((mealNameAndType, current, index) => {
    mealNameAndType[mealType[index]] = current
    return mealNameAndType
  }, {})

  const m = Object.entries(mealNameAndType)
  // console.log(m)

  return (
    <div>
      {m.map((meal) => (
        <li>
          {meal[0]}: {meal[1]}
        </li>
      ))}
    </div>
  )
}

export default MealItem
