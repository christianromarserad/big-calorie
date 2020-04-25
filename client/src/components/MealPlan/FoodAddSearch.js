import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from '../LoadingAnimation';

const FoodAddSearch = ({ day, mealIndex, addFoodActionCreator }) => {
    let [searchKeyWord, setSearchKeyWord] = useState('');
    let [timer, setTimer] = useState(null);
    let [searchItems, setSearchItems] = useState([]);
    let [isLoading, setisLoading] = useState(true);


    useEffect(() => {
        clearTimeout(timer);
        setisLoading(true);
        setSearchItems([]);

        if (searchKeyWord !== '') {
            setTimer(setTimeout(getSearchItems.bind(this, searchKeyWord), 500));
        }

    }, [searchKeyWord])

    const getSearchItems = (searchKeyWord) => {
        axios.get('/api/searchFoods/' + searchKeyWord).then((res) => {
            setSearchItems(res.data);
            setisLoading(false);
        });
    }

    return (
        <div class="relative">
            <input
                class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Search"
                value={searchKeyWord}
                onBlur={setSearchKeyWord.bind(this, '')}
                onChange={(event) => { setSearchKeyWord(event.target.value) }} />

            <AnimatePresence>
                {
                    searchKeyWord !== '' &&
                    <motion.div
                        class="bg-white rounded-b-md absolute w-full shadow-lg h-64 overflow-y-scroll"
                        initial={{ height: 0 }}
                        animate={{ height: 235 }}
                        exit={{ height: 0 }}>
                        {
                            isLoading ?
                                <div class="flex h-full w-full justify-center items-center">
                                    <LoadingAnimation />
                                </div> :
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
                        }
                    </motion.div>
                }
            </AnimatePresence>

        </div>
    );
}

export default FoodAddSearch;

