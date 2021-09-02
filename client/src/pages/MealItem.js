const MealItem = ({ mealName, mealType }) => {
  return (
    <div>
      {mealType.map((mType) => (
        <div key={mType.id}>
          <li>{mType}</li>
        </div>
      ))}
      {mealName.map((mName) => (
        <div key={mName.id}>
          <li>{mName}</li>
        </div>
      ))}
    </div>
  )
}

export default MealItem
