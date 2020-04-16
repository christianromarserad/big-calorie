import React from 'react';
import {
    getTotal,
    getBMR
} from '../../utils/Nutrients'

function UserComputation({ age, height, weight, gender, selectedDay, days }) {
    return (
        <div class="h-full flex flex-col justify-center">
            <div class="flex mb-6">
                <p class="flex-1">BMR:</p>
                <p>{getBMR(age, height, weight, gender) ?? "Incomplete Form"}</p>
            </div>
            <div class="flex">
                <p class="flex-1">Selected Day:</p>
                <p>{selectedDay}</p>
            </div>
            <div class="flex">
                <p class="flex-1">Total Calories:</p>
                <p>{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat())}</p>
            </div>
            <div class="flex">
                <p class="flex-1">Total Carbs:</p>
                <p>{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.carb)))).flat())}</p>
            </div>
            <div class="flex">
                <p class="flex-1">Total Protein:</p>
                <p>{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.protein)))).flat())}</p>
            </div>
            <div class="flex">
                <p class="flex-1">Total Fat:</p>
                <p>{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.fat)))).flat())}</p>
            </div>
        </div>
    )
}

export default UserComputation;