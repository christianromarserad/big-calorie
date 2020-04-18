import React from 'react';
import MealPlanItem from './MealPlanItem';
import { motion } from "framer-motion"

function MealPlanItemList({ meals, selectedDay, deleteMealActionCreator, addMealActionCreator, initialPosition, exitPosition }) {
    console.log(exitPosition);
    return (
        <motion.div
            class="flex flex-wrap overflow-auto overflow-x-hidden"
            initial={{ x: initialPosition }}
            animate={{ x: 0 }}
            exit={{ x: exitPosition }}
            transition={{ ease: "easeInOut" }}>


            {
                meals.map(({ mealName, foods, dateCreated }, index) => {
                    return (
                        <motion.div
                            class="h-72 w-6/12 p-5"
                            positionTransition={{ ease: "easeInOut" }}
                            initial={{ opacity: 0, y: 50, scale: 0.3 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ ease: "easeInOut" }}
                            key={selectedDay + dateCreated}>
                            <MealPlanItem
                                mealName={mealName}
                                foods={foods}
                                index={index}
                                selectedDay={selectedDay}
                                deleteMealActionCreator={deleteMealActionCreator} />
                        </motion.div>
                    );
                })
            }
            <motion.div
                class="h-72 w-6/12 p-5"
                positionTransition={{ ease: "easeInOut" }}
                initial={{ opacity: 0, y: 50, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ease: "easeInOut" }}
                key={selectedDay}>

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    class="bg-white rounded-lg shadow-lg w-full h-full flex flex-1 text-teal-400 hover:text-teal-700 justify-center"
                    onClick={() => { addMealActionCreator(selectedDay) }}>
                    <svg
                        class="h-24 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                </motion.button>
            </motion.div>

        </motion.div >
    );
}


export default MealPlanItemList;