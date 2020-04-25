import React from 'react';
import { motion } from 'framer-motion';
import LoadingAnimation from '../LoadingAnimation';

function FoodAddSearchResult({ isLoading, searchItems, addFoodActionCreator, day, mealIndex }) {
    const noResultsFoundComponent = (
        <div class="flex h-full w-full justify-center items-center">
            <div class="text-sm font-bold text-gray-700">No Results Found</div>
        </div>
    );

    const searchItemsComponent = (
        searchItems.map(({ food_name, serving_qty, serving_unit, photo }) => (
            <button
                key={food_name}
                class="block w-full hover:bg-gray-200 font-bold py-2 px-4 border flex items-center"
                onMouseDown={addFoodActionCreator.bind(this, day, mealIndex, food_name)}>

                <img class="object-contain h-10 w-20" src={photo.thumb} />
                <p class="text-gray-600 flex-1 text-right">{food_name}</p>
                <p class="text-gray-600 flex-1 text-right">{serving_qty} {serving_unit}</p>
            </button>
        ))
    );

    const loadingAnimationComponent = (
        <div class="flex h-full w-full justify-center items-center">
            <LoadingAnimation />
        </div>
    );

    return (
        <motion.div
            class="bg-white rounded-b-md absolute w-full shadow-lg h-64 overflow-y-scroll"
            initial={{ height: 0 }}
            animate={{ height: 235 }}
            exit={{ height: 0 }}>
            {
                isLoading ?
                    loadingAnimationComponent :
                    searchItems.length != 0 ?
                        searchItemsComponent :
                        noResultsFoundComponent
            }
        </motion.div>
    );
}

export default FoodAddSearchResult;