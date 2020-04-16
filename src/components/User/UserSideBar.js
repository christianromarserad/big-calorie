import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFieldActionCreator } from '../../store/UserReducer';
import UserForm from './UserForm';
import {
    getTotal,
    getBMR
} from '../../utils/Nutrients'

function UserSideBar({ name, age, height, weight, gender, selectedDay, updateFieldActionCreator, days }) {
    const getDayTotalCalories = () => {
        let allFoods = days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat();
        console.log(allFoods);
    }

    return (
        <div class="bg-white w-64 h-full shadow-lg py-4 px-4 flex flex-col">
            <UserForm
                name={name}
                age={age}
                height={height}
                weight={weight}
                gender={gender}
                updateFieldActionCreator={updateFieldActionCreator} />

            <div class="flex-1 flex flex-col justify-center">
                <div>BMR: {getBMR(age, height, weight, gender)}</div>
                <div>Selected Day: {selectedDay}</div>
                <div>Total Calories: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.calorie)))).flat())}</div>
                <div>Total Carbs: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.carb)))).flat())}</div>
                <div>Total Protein: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.protein)))).flat())}</div>
                <div>Total Fat: {getTotal(days[selectedDay].map((meal) => (meal.foods.map((food) => (food.fat)))).flat())}</div>
            </div>
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
        updateFieldActionCreator: updateFieldActionCreator
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSideBar);