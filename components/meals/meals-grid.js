import React from 'react'
import classes from './meals-grid.module.css'
import MealItem from './meal-item'
const MealsGrid = ({ meals }) => {
    // console.log(meals)
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <l1 key={meal.id}>
                    <MealItem {...meal} />
                </l1>
            ))}
        </ul>
    )
}

export default MealsGrid