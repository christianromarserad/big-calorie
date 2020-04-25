import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import FoodAddSearhResult from './FoodAddSearchResult';

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
                    searchKeyWord !== '' && <FoodAddSearhResult
                        isLoading={isLoading}
                        searchItems={searchItems}
                        addFoodActionCreator={addFoodActionCreator}
                        day={day}
                        mealIndex={mealIndex} />
                }
            </AnimatePresence>

        </div>
    );
}

export default FoodAddSearch;

