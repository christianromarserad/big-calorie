import React from 'react';
import {
    getTotal,
    getBMR
} from '../../utils/Nutrients'

function UserComputation({ age, height, weight, gender, selectedDay, days }) {
    return (
        <div class="h-full flex flex-col justify-center">
            <div>BMR: {getBMR(age, height, weight, gender)}</div>
            <div>Selected Day: {selectedDay}</div>
            <div>Total Calories: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat())}</div>
            <div>Total Carbs: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.carb)))).flat())}</div>
            <div>Total Protein: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.protein)))).flat())}</div>
            <div>Total Fat: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.fat)))).flat())}</div>
        </div>
    )
}

export default UserComputation;