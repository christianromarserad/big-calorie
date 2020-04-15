import React from 'react';
import { Link } from "react-router-dom";
import {
    getTotalCalories,
    getTotalCarbs,
    getTotalFat,
    getTotalProtein
} from '../../utils/Nutrients';

function MealPlanItem(props) {
    return (
        <div class="bg-white rounded-lg shadow-lg w-auto m-5 h-64 flex-1 flex flex-col">
            <div class="flex items-center border-b p-3 shadow-sm">
                <p class="flex-1 font-bold text-gray-700 text-lg">
                    {props.mealName}
                </p>
                <div>
                    <Link to={"/edit/" + props.selectedDay + "/" + props.index}>
                        <button class="text-gray-600 hover:text-black py-2 px-2 rounded-lg">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" /></svg>
                        </button>
                    </Link>
                    <button class="text-gray-600 hover:text-black py-2 px-2 rounded-lg" onClick={props.deleteMeal}>
                        <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                    </button>
                </div>
            </div>
            <div class="overflow-y-scroll m-2">
                <table class="table-auto w-full">
                    <tbody>
                        {
                            props.foods.map(({ foodName, calorie, carb, protein, fat }) => {
                                return (
                                    <tr >
                                        <td class="px-4 py-2">{foodName}</td>
                                        <td class="px-4 py-2 text-xs">carb: {carb}</td>
                                        <td class="px-4 py-2 text-xs">protein: {protein}</td>
                                        <td class="px-4 py-2 text-xs">fat: {fat}</td>
                                        <td class="px-4 py-2 text-xs">calorie: {calorie}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div class="border-t flex items-center border-b p-3">
                <p class="flex-1 font-bold text-gray-700 text-base">
                    Calories: {getTotalCalories(props.foods.map(food => (food.calorie)))}
                </p>
                <p class="flex-1 font-bold text-gray-700 text-base">
                    Carb: {getTotalCarbs(props.foods.map(food => (food.carb)))}
                </p>
                <p class="flex-1 font-bold text-gray-700 text-base">
                    Protein: {getTotalProtein(props.foods.map(food => (food.protein)))}
                </p>
                <p class="flex-1 font-bold text-gray-700 text-base">
                    Fat: {getTotalFat(props.foods.map(food => (food.fat)))}
                </p>
            </div>
        </div>
    );
}

export default MealPlanItem;