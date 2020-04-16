import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateTextFieldActionCreator } from '../../store/UserReducer';
import {
    getTotal,
    getBMR
} from '../../utils/Nutrients'

function UserSideBar({ name, age, height, weight, gender, selectedDay, updateTextFieldActionCreator, days }) {
    const getDayTotalCalories = () => {
        let allFoods = days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat();
        console.log(allFoods);
    }

    return (
        <div class="bg-white w-64 h-full shadow-lg py-4 px-4">
            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="user-name">
                    Name
                </label>
                <input
                    class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="user-name"
                    type="text"
                    value={name}
                    name="name"
                    onChange={updateTextFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">
                    Age
                </label>
                <input
                    class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="age"
                    type="number"
                    value={age}
                    name="age"
                    onChange={updateTextFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="height">
                    Height
                </label>
                <input
                    class="font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="height"
                    type="number"
                    placeholder="cm"
                    value={height}
                    name="height"
                    onChange={updateTextFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
                    Weight
                </label>
                <input
                    class="font-medium font-medium appearance-none block w-full bg-gray-300 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white border focus:border-gray-500"
                    id="weight"
                    type="number"
                    placeholder="kg"
                    value={weight}
                    name="weight"
                    onChange={updateTextFieldActionCreator} />
            </div>

            <div class="w-full my-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
                    Gender
                </label>
                <div class="mt-2">
                    <label class="inline-flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={updateTextFieldActionCreator}
                            checked={gender === "male"} />
                        <span class="ml-2">Male</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={updateTextFieldActionCreator}
                            checked={gender === "female"} />
                        <span class="ml-2">Female</span>
                    </label>
                </div>
            </div>

            <div>BMR: {getBMR(age, height, weight, gender)}</div>
            <div>Selected Day: {selectedDay}</div>
            <div>Total Calories: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat())}</div>
            <div>Total Carbs: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.carb)))).flat())}</div>
            <div>Total Protein: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.protein)))).flat())}</div>
            <div>Total Fat: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.fat)))).flat())}</div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        ...state.user,
        selectedDay: state.mealPlan.selectedDay,
        days: state.mealPlan.days
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTextFieldActionCreator: updateTextFieldActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSideBar);