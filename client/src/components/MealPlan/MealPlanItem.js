import React, { useState } from 'react';
import DeletePrompt from '../DeletePrompt';
import MealPlanEditPrompt from './MealPlanEditPrompt';
import { getTotal } from '../../utils/Functions';

function MealPlanItem({ mealName, foods, index, selectedDay, deleteMealActionCreator }) {
    const [isDeletePromptOpen, setIsDeletePromptOpen] = useState(false);
    const [isMealPlanEditPromptOpen, setIsMealPlanEditPromptOpen] = useState(false);
    const [deleteItemName, setDeleteItemName] = useState('');

    const openDeletePrompt = (itemName) => {
        setIsDeletePromptOpen(true);
        setDeleteItemName(itemName);
    }

    const closeDeletePrompt = () => {
        setIsDeletePromptOpen(false);
    }

    const openMealPlanEditPrompt = () => {
        setIsMealPlanEditPromptOpen(true);
    }

    const closeMealPlanEditPrompt = () => {
        setIsMealPlanEditPromptOpen(false);
    }

    return (
        <>
            <DeletePrompt
                isDeletePromptOpen={isDeletePromptOpen}
                closeDeletePrompt={closeDeletePrompt}
                itemName={deleteItemName}
                deleteItem={deleteMealActionCreator.bind(this, selectedDay, index)} />

            <MealPlanEditPrompt
                index={index}
                day={selectedDay}
                isMealPlanEditPromptOpen={isMealPlanEditPromptOpen}
                closeMealPlanEditPrompt={closeMealPlanEditPrompt} />

            <div class="bg-white rounded-xl shadow-lg w-full h-full flex-1 flex flex-col">
                <div class="flex items-center p-3 bg-teal-300 rounded-t-xl shadow-sm">
                    <p class="flex-1 font-bold text-gray-700 text-lg">
                        {mealName}
                    </p>
                    <div>
                        <button
                            class="text-gray-600 hover:text-black py-2 px-2 rounded-lg"
                            onClick={openMealPlanEditPrompt}>
                            <svg
                                class="h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                            </svg>
                        </button>

                        <button
                            class="text-gray-600 hover:text-black py-2 px-2 rounded-lg"
                            onClick={openDeletePrompt.bind(this, mealName)}>
                            <svg class="h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flex-1 overflow-auto m-2">
                    <table class="table-auto w-full">
                        <tbody>
                            {
                                foods.map(({ foodName, calorie, carb, protein, fat, photo, dateCreated }) => {
                                    return (
                                        <tr key={foodName + dateCreated}>
                                            <td><img class="h-8 w-12 object-contain" src={photo} /></td>
                                            <td class="px-4 py-2 text-xs font-bold">{foodName}</td>
                                            <td class="px-4 py-2 text-xs hidden phone:table-cell">carb: {carb}</td>
                                            <td class="px-4 py-2 text-xs hidden phone:table-cell">protein: {protein}</td>
                                            <td class="px-4 py-2 text-xs hidden phone:table-cell">fat: {fat}</td>
                                            <td class="px-4 py-2 text-xs">calorie: {calorie}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="border-t flex items-center border-b p-3 text-center">
                    <p class="flex-1 font-bold text-gray-700 text-xs">
                        Calories: {getTotal(foods.map(food => (food.calorie)))}
                    </p>
                    <p class="flex-1 font-bold text-gray-700 text-xs">
                        Carb: {getTotal(foods.map(food => (food.carb)))}
                    </p>
                    <p class="flex-1 font-bold text-gray-700 text-xs">
                        Protein: {getTotal(foods.map(food => (food.protein)))}
                    </p>
                    <p class="flex-1 font-bold text-gray-700 text-xs">
                        Fat: {getTotal(foods.map(food => (food.fat)))}
                    </p>
                </div>
            </div>
        </>
    );
}

export default MealPlanItem;