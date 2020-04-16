import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeletePrompt from '../DeletePrompt';

const FoodEditTable = ({ day, mealIndex, foods, deleteFoodActionCreator }) => {
    const [isDeletePromptOpen, setIsDeletePromptOpen] = useState(false);
    const [deleteItemName, setDeleteItemName] = useState('');
    const [deleteFoodIndex, setDeleteFoodIndex] = useState();

    const openDeletePrompt = (itemName) => {
        setIsDeletePromptOpen(true);
        setDeleteItemName(itemName);
    }

    const closeDeletePrompt = () => {
        setIsDeletePromptOpen(false);
    }

    return (
        <>
            <DeletePrompt
                isDeletePromptOpen={isDeletePromptOpen}
                closeDeletePrompt={closeDeletePrompt}
                itemName={deleteItemName}
                deleteItem={deleteFoodActionCreator.bind(this, day, mealIndex, deleteFoodIndex)} />

            <div class="w-full h-full flex flex-col overflow-hidden">
                <div class="w-full mt-6">
                    <div class="flex text-center font-bold uppercase text-xs text-gray-700 bg-teal-300 rounded-md">
                        <div class="px-4 py-2 w-7/12">Photo</div>
                        <div class="px-4 py-2 w-7/12">Name</div>
                        <div class="px-4 py-2 w-7/12">Carb</div>
                        <div class="px-4 py-2 w-7/12">Protein</div>
                        <div class="px-4 py-2 w-7/12">Fat</div>
                        <div class="px-4 py-2 w-7/12">Calorie</div>
                        <div class="px-4 py-2 w-7/12">Delete</div>
                    </div>
                </div>

                <div class="flex-1 overflow-auto">
                    {
                        foods.map(({ foodName, calorie, carb, protein, fat, photo }, foodIndex) => {
                            return (
                                <div class="text-center flex mt-5 mb-5 rounded-lg font-bold text-gray-700 items-center shadow-lg text-sm">
                                    <div class="px-4 py-2 w-7/12"><img class="object-contain h-10 w-20 object-right" src={photo} /></div>
                                    <div class="px-4 py-2 w-7/12">{foodName}</div>
                                    <div class="px-4 py-2 w-7/12">{carb}</div>
                                    <div class="px-4 py-2 w-7/12">{protein}</div>
                                    <div class="px-4 py-2 w-7/12">{fat}</div>
                                    <div class="px-4 py-2 w-7/12">{calorie}</div>
                                    <div class="px-4 py-2 w-7/12">
                                        <button
                                            class="text-gray-600 hover:text-black py-2 px-2 rounded-lg"
                                            onClick={() => { setDeleteFoodIndex(foodIndex); openDeletePrompt(foodName); }}>
                                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default FoodEditTable;