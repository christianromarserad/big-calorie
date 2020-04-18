import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FoodEditTable from './FoodEditTable';
import FoodAddSearch from './FoodAddSearch';
import { getTotal } from '../../utils/Functions';
import Prompt from '../Prompt';
import {
    updateMealNameActionCreator,
    addFoodActionCreator,
    deleteFoodActionCreator
} from '../../store/MealPlanReducer';

function MealPlanEditPrompt({ mealName, foods, updateMealNameActionCreator, addFoodActionCreator, deleteFoodActionCreator, index, day, isMealPlanEditPromptOpen, closeMealPlanEditPrompt }) {
    return (
        <Prompt
            isPromptOpen={isMealPlanEditPromptOpen}
            styles="w-full p-10 h-full">
            <div class="bg-white p-10 rounded-lg shadow-lg h-full">
                <div class="h-full flex flex-col">
                    <button
                        class="text-xs uppercase font-bold bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg w-16"
                        onClick={closeMealPlanEditPrompt}>
                        back
                    </button>

                    <div class="mt-8 mb-16 flex items-center shadow-md rounded-lg p-4">
                        <div class="w-full flex-1 mr-2">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Meal Name
                                </label>
                            <input
                                class="font-medium appearance-none block w-full bg-gray-300 border border-gray-300 rounded rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Doe"
                                value={mealName}
                                onChange={updateMealNameActionCreator.bind(this, day, index)} />
                        </div>

                        <div class="flex-1 flex  ml-2 text-center">
                            <p class="flex-1 font-bold text-gray-700 text-xs uppercase">
                                Calories: {getTotal(foods.map(food => (food.calorie)))}
                            </p>
                            <p class="flex-1 font-bold text-gray-700 text-xs uppercase">
                                Carb: {getTotal(foods.map(food => (food.carb)))}
                            </p>
                            <p class="flex-1 font-bold text-gray-700 text-xs uppercase">
                                Protein: {getTotal(foods.map(food => (food.protein)))}
                            </p>
                            <p class="flex-1 font-bold text-gray-700 text-xs uppercase">
                                Fat: {getTotal(foods.map(food => (food.fat)))}
                            </p>
                        </div>
                    </div>

                    <FoodAddSearch
                        day={day}
                        mealIndex={index}
                        addFoodActionCreator={addFoodActionCreator} />

                    <FoodEditTable
                        day={day}
                        mealIndex={index}
                        foods={foods}
                        deleteFoodActionCreator={deleteFoodActionCreator} />
                </div>
            </div>
        </Prompt>
    );
}

function mapStateToProps(state, ownProps) {
    let { index, day } = ownProps;
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


export default connect(mapStateToProps, mapDispatchToProps)(MealPlanEditPrompt);