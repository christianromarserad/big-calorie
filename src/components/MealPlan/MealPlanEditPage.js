import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import FoodEditTable from './FoodEditTable';
import {
    getTotalCalories,
    getTotalCarbs,
    getTotalFat,
    getTotalProtein
} from '../../utils/Nutrients';
import {
    updateMealNameActionCreator,
    addFoodActionCreator,
    deleteFoodActionCreator
} from '../../store/MealPlanReducer';

function MealPlanEditPage(props) {
    let { index, day } = props.match.params;
    let [searchKeyWord, setSearchKeyWord] = useState('');
    let [timer, setTimer] = useState(null);
    let [searchItems, setSearchItems] = useState([]);

    const searchOnFocusOut = () => {
        setSearchItems([]);
        setSearchKeyWord('');
    }

    const searchOnChange = (event) => {
        setSearchKeyWord(event.target.value);
        clearTimeout(timer);
        setTimer(setTimeout(getSearchItems.bind(this, event.target.value), 500));
    }

    const getSearchItems = (searchKeyWord) => {
        axios.get('/v2/search/instant',
            {
                params: {
                    query: searchKeyWord
                }
            }
        ).then((res) => {
            setSearchItems(res.data.common);
        });
    }

    return (
        <div class="w-full p-10 h-full">
            <div class="bg-white p-10 rounded-lg shadow-lg h-full">
                <div class="h-full flex flex-col">
                    <Link to={"/" + props.selectedDay + "/" + props.index}>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-lg">
                            back
                        </button>
                    </Link>

                    <div class="mt-8 mb-16 flex items-center">
                        <div class="w-full flex-1 mr-2">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Meal Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                                value={props.mealName}
                                onChange={props.updateMealNameActionCreator.bind(this, day, index)} />
                        </div>

                        <div class="flex-1 flex  ml-2 text-center">
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

                    <div class="relative">
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Search"
                            value={searchKeyWord}
                            onBlur={searchOnFocusOut}
                            onChange={searchOnChange} />

                        {
                            searchItems.length != 0 ?
                                <div class="bg-white rounded-b-md absolute w-full shadow-lg h-64 overflow-y-scroll">
                                    {
                                        searchItems.map(({ food_name, serving_qty, serving_unit, photo }) => (
                                            <button
                                                class="block w-full hover:bg-gray-200 font-bold py-2 px-4 border flex items-center"
                                                onMouseDown={props.addFoodActionCreator.bind(this, day, index, food_name)}>

                                                <img class="object-contain h-10 w-20" src={photo.thumb} />
                                                <p class="text-gray-600 flex-1 text-right">{food_name}</p>
                                                <p class="text-gray-600 flex-1 text-right">{serving_qty} {serving_unit}</p>
                                            </button>
                                        ))
                                    }
                                </div> : null
                        }
                    </div>

                    <FoodEditTable
                        day={day}
                        mealIndex={index}
                        foods={props.foods}
                        deleteFoodActionCreator={props.deleteFoodActionCreator} />
                </div >
            </div>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    let { index, day } = ownProps.match.params;
    return {
        mealName: state.mealPlan.days[day][index].mealName,
        foods: state.mealPlan.days[day][index].foods
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateMealNameActionCreator: updateMealNameActionCreator,
        addFoodActionCreator: addFoodActionCreator,
        deleteFoodActionCreator: deleteFoodActionCreator
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MealPlanEditPage);