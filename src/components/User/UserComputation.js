import React from 'react';
import {
    getTotal,
    getBMR
} from '../../utils/Functions'

function UserComputation({ age, height, weight, gender, selectedDay, days }) {
    return (
        <div class="h-full flex flex-col justify-center">
            <div class="flex mb-6">
                <p class="flex-1 text-gray-700 uppercase font-bold text-xs">BMR:</p>
                <p class="text-xs text-gray-700">{getBMR(age, height, weight, gender) ?? "Incomplete Form"}</p>
            </div>
            <div class="flex">
                <p class="flex-1 text-gray-700 uppercase font-bold text-xs">Selected Day:</p>
                <p class="text-xs text-gray-700">{selectedDay}</p>
            </div>
            <div class="flex">
                <p class="flex-1 text-gray-700 uppercase font-bold text-xs">Total Calories:</p>
                <p class="text-xs text-gray-700">{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat())}</p>
            </div>
            <div class="flex">
                <p class="flex-1 text-gray-700 uppercase font-bold text-xs">Total Carbs:</p>
                <p class="text-xs text-gray-700">{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.carb)))).flat())}</p>
            </div>
            <div class="flex">
                <p class="flex-1 text-gray-700 uppercase font-bold text-xs">Total Protein:</p>
                <p class="text-xs text-gray-700">{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.protein)))).flat())}</p>
            </div>
            <div class="flex">
                <p class="flex-1 text-gray-700 uppercase font-bold text-xs">Total Fat:</p>
                <p class="text-xs text-gray-700">{getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.fat)))).flat())}</p>
            </div>
        </div>
    )
}

export default UserComputation;