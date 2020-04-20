import React, { useState } from 'react';
import DeletePrompt from '../DeletePrompt';
import { motion, AnimatePresence } from 'framer-motion';

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
                    <div class="flex text-center font-bold text-xs text-white bg-teal-600 rounded-md">
                        <div class="py-2 w-7/12">Photo</div>
                        <div class="py-2 w-7/12">Name</div>
                        <div class="py-2 w-7/12 hidden phone:block">Carb</div>
                        <div class="py-2 w-7/12 hidden phone:block">Protein</div>
                        <div class="py-2 w-7/12 hidden phone:block">Fat</div>
                        <div class="py-2 w-7/12">Calorie</div>
                        <div class="py-2 w-7/12">Delete</div>
                    </div>
                </div>

                <div class="flex-1 overflow-auto">
                    <AnimatePresence>
                        {
                            foods.map(({ foodName, calorie, carb, protein, fat, photo, dateCreated }, foodIndex) => {
                                return (
                                    <motion.div
                                        class="text-center flex mt-5 mb-5 rounded-lg font-bold text-gray-700 items-center text-xs shadow-md"
                                        positionTransition={{ ease: "easeInOut" }}
                                        initial={{ opacity: 0, scale: 0.3 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ ease: "easeInOut" }}
                                        exit={{ opacity: 0, scale: 0.3 }}
                                        key={day + foodName + dateCreated}
                                    >
                                        <div class="py-2 w-7/12"><img class="object-contain h-10 w-20 object-right" src={photo} /></div>
                                        <div class="py-2 w-7/12">{foodName}</div>
                                        <div class="py-2 w-7/12 hidden phone:block">{carb}</div>
                                        <div class="py-2 w-7/12 hidden phone:block">{protein}</div>
                                        <div class="py-2 w-7/12 hidden phone:block">{fat}</div>
                                        <div class="py-2 w-7/12">{calorie}</div>
                                        <div class="py-2 w-7/12">
                                            <button
                                                class="text-gray-600 hover:text-black py-2 px-2 rounded-lg"
                                                onClick={() => { setDeleteFoodIndex(foodIndex); openDeletePrompt(foodName); }}>
                                                <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })
                        }
                    </AnimatePresence>

                </div>
            </div>
        </>
    );
}

export default FoodEditTable;