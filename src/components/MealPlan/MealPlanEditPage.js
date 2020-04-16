import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import FoodEditTable from './FoodEditTable';
import FoodAddSearch from './FoodAddSearch';
import { getTotal } from '../../utils/Nutrients';
import {
    updateMealNameActionCreator,
    addFoodActionCreator,
    deleteFoodActionCreator
} from '../../store/MealPlanReducer';

function MealPlanEditPage(props) {
    let { index, day } = props.match.params;

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
                                Calories: {getTotal(props.foods.map(food => (food.calorie)))}
                            </p>
                            <p class="flex-1 font-bold text-gray-700 text-base">
                                Carb: {getTotal(props.foods.map(food => (food.carb)))}
                            </p>
                            <p class="flex-1 font-bold text-gray-700 text-base">
                                Protein: {getTotal(props.foods.map(food => (food.protein)))}
                            </p>
                            <p class="flex-1 font-bold text-gray-700 text-base">
                                Fat: {getTotal(props.foods.map(food => (food.fat)))}
                            </p>
                        </div>
                    </div>

                    <FoodAddSearch
                        day={day}
                        mealIndex={index}
                        addFoodActionCreator={props.addFoodActionCreator} />

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